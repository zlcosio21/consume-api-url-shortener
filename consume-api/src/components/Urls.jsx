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
        fetchApi();
    }, [])

    return (
        <>
            <div className='container'>
                {urls.map(url => (

                    <div className='card' key={url.id}>
                        <div class="card__border"></div>
                        <div class="card_title__container">
                            <span class="card_title">API URL CONTENT</span>
                        </div>
                        <ul class="card__list">
                            <li class="card__list_item">
                                <span class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="check_svg" >
                                        <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">ID: {url.id}</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="check_svg" >
                                        <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Complete Url:&nbsp;
                                    <a href={url.complete_url}>
                                        {url.complete_url}
                                    </a>
                                </span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="check_svg" >
                                        <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Short Url:&nbsp;
                                    <a href={domainUrl + url.short_url}>
                                        {url.short_url}
                                    </a>
                                </span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="check_svg" >
                                        <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Visits: {url.visits}</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="check_svg" >
                                        <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Created: {moment(url.created).format('YYYY-MM-DD HH:mm:ss')}</span>
                            </li>
                            <li class="card__list_item">
                                <span class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="check_svg" >
                                        <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="list_text">Domain:&nbsp;
                                    <a href={domainUrl}>
                                        {domainUrl}
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <button class="button">
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
