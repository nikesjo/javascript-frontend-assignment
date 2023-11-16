import { useContext, createContext, useState, useEffect } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)
    const [news, setNews] = useState([])

    useEffect(() => {
        getArticles()
        getNews()
    }, [])
    
    const getArticles = async () => {
        const result = await fetch(apiUrl)
        setArticles(await result.json())
    }

    const getArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`)
        const data = await result.json()
        setArticle(data)
    }

    const clearArticle = () => {
        setArticle(null)
    }

    const getNews = async () => {
        const result = await fetch(`${apiUrl}?take=3`)
        const data = await result.json()
        setNews(data)
    }

    return (
        <ArticleContext.Provider value={{articles, article, news, getArticles, getArticle, clearArticle, getNews}}>
            {children}
        </ArticleContext.Provider>
    )
}