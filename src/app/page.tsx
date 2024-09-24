'use client'

import { Header } from "@/components/sections/home/Header";
import { MainReviews } from "@/components/sections/home/Main";
import { Footer } from "@/components/sections/home/Footer";
import { useEffect, useState } from "react";
import { getAlbum, getNewReleases, searchAlbums } from "@/lib/spotify";

export default function Home() {
  // const [featuredAlbum, setFeaturedAlbum] = useState(null)
  // const [recentAlbums, setRecentAlbums] = useState([])
  // const [searchResults, setSearchResults] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState()

  // useEffect(() => {
  //   async function fetchInitialData() {
  //     try {
  //       setIsLoading(true)
  //       const newReleasesData = await getNewReleases()
  //       setRecentAlbums(newReleasesData.albums.items)

  //       if (newReleasesData.albums.items.length > 0) {
  //         const featuredAlbumData = await getAlbum(newReleasesData.albums.items[0].id)
  //         setFeaturedAlbum(featuredAlbumData)
  //       }
  //     } catch (err) {
  //       setError('Failed to fetch data from Spotify')
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   fetchInitialData()
  // }, [])

  // const handleSearch = async (event) => {
  //   event.preventDefault()
  //   const query = event.target.elements.search.value
  //   try {
  //     const results = await searchAlbums(query)
  //     setSearchResults(results.albums.items)
  //   } catch (err) {
  //     setError('Failed to search albums')
  //   }
  // }

  // if (isLoading) {
  //   return <div className="flex items-center justify-center h-screen">Loading...</div>
  // }

  // if (error) {
  //   return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>
  // }

  

  return (
    <section className="">
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <section className="lg:max-w-7xl mx-auto">
          <main className="flex-1">
            <h2 className="text-2xl font-bold my-4 w-full flex-grow">Featured Album</h2>
            <MainReviews />
          </main>
          <Footer />
        </section>
      </div>
    </section>
  );
}
