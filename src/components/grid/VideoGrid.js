import React from 'react';
import VideoGridItem from './VideoGridItem';

const VideoGrid = () => {
    return (
        
            <section class="pt-12">
                <div
                    class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* single video  */}
                    <VideoGridItem/>

                     {/* error section
                    <div class="col-span-12">some error happened</div>  */}
                </div>
            </section>
       
    );
};

export default VideoGrid;