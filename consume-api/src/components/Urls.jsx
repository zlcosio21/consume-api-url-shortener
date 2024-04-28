import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './Urls.css'

function Urls() {
    const endPoint = "http://localhost:8000/api/all_urls/"
    const domainUrl = "http://localhost:8000/"
    const [urls, setUrls] = useState([])

    const fetchApi = async () => {
        const response = await fetch(endPoint)
        const responseJson = await response.json()

        if (!Array.isArray(responseJson)) {
            console.error("API response is not in the expected format:", responseJson)
            return
        }

        setUrls(responseJson)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <div className='container'>
                {urls.map(url => (

                    <div className='card' key={url.id}>
                        <div className="card__border"></div>
                        <div className="card_title__container">
                            <span className="card_title">API URL CONTENT</span>
                        </div>
                        <ul className="card__list">
                            <li className="card__list_item">
                                <span className="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg" >
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="list_text">ID: {url.id}</span>
                            </li>
                            <li className="card__list_item">
                                <span className="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg url_complete_svg" >
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="list_text">Complete Url:&nbsp;
                                    <a href={url.complete_url}>
                                        {url.complete_url}
                                    </a>
                                </span>
                            </li>
                            <li className="card__list_item">
                                <span className="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg" >
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="list_text">Short Url:&nbsp;
                                    <a href={domainUrl + url.short_url}>
                                        {url.short_url}
                                    </a>
                                </span>
                            </li>
                            <li className="card__list_item">
                                <span className="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg" >
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="list_text">Visits: {url.visits}</span>
                            </li>
                            <li className="card__list_item">
                                <span className="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg" >
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="list_text">Created: {moment(url.created).format('YYYY-MM-DD HH:mm:ss')}</span>
                            </li>
                            <li className="card__list_item">
                                <span className="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg" >
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="list_text">Domain:&nbsp;
                                    <a href={domainUrl}>
                                        {domainUrl}
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <button className="button">
                            <a className='link' href={domainUrl + url.short_url}>
                                GO TO THE COMPLETE URL
                            </a>
                        </button>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Urls
