import React from 'react'

const Search = ({ setSearch, search, setCurrentlyPlaying }) => {
    const handleInputChange = async (event) => {
        setSearch(event.target.value);
    }

    const handleSongChange = async () => {
        //TODO: update setCurrentlyPlaying to clicked track uri
    }
    return (
        <div className='flex w-1/2 mb-2'>
            <input className='rounded-full px-4 py-2 bg-zinc-700 focus:ring-0 focus:outline-none focus:border focus:border-[#ff5400] transition' onChange={(e) => handleInputChange(e)} value={search} type='text' placeholder='Search'/>
        </div>
    )
}

export default Search