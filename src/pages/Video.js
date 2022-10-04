import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import VideoDescription from '../components/description/VideoDescription';
import VideoPlayer from '../components/description/VideoPlayer';
import RelatedVideoList from '../components/list/RelatedVideoList';
import { fetchVideo } from '../features/video/videoSlice';
import Loading from '../ui/Loading';

const Video = () => {

    const { videoId } = useParams()


    const { video, isLoading, isError, error } = useSelector(state => state.video)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchVideo(videoId))


    }, [dispatch, videoId])


    // decide what to render 


    let content = null
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div class="col-span-12">{error}</div>
    if (!isLoading && !isError && !video?.id) content = <p>No Transaction Found</p>
    if (!isLoading && !isError && video?.id) {
        content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
                {/* video player  */}
                <VideoPlayer video={video} />

                {/* video description  */}
                <VideoDescription video={video} />
            </div>

            {/* related videos  */}
            <RelatedVideoList currentId={video.id} tags={video.tags} />
        </div>
    }

    return (
        <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {
                    content
                }
            </div>
        </section>
    );
};

export default Video;