import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../../ui/Loading';
import RelatedVideoListItem from './RelatedVideoListItem';

const RelatedVideoList = ({ currentId, tags }) => {

    const{relatedVideos,isLoading,isError,error}= useSelector(state=>state.relatedVideos)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchRelatedVideos({tags,currentId}))

    },[dispatch,tags,currentId])

    // decide what to render 

    let content = null
    if (isLoading) content = <Loading/>
    if (!isLoading && isError) content = <div class="col-span-12">{error}</div>  
    if (!isLoading && !isError && relatedVideos?.length === 0) content = <p>No Transaction Found</p>
    if (!isLoading && !isError && relatedVideos?.length > 0) {
        content = relatedVideos.map(video => <RelatedVideoListItem key={video.id} video={video} />)
    }



    return (
        <div
            class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* single related video */}
           {content}

        </div>
    );
};

export default RelatedVideoList;