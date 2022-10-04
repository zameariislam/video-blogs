import React from 'react';
import { Link } from 'react-router-dom';

const VideoGridItem = () => {
    return (
        <div
        class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
    >
        <div class="w-full flex flex-col">
            <div class="relative">
                <Link to='videos/1'>
                    <img
                        src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                        class="w-full h-auto"
                        alt="Some video title"
                    />
                </Link>

                <p
                    class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                    12:10
                </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
                <Link to='videos/1' class="shrink-0">
                    <img
                        src="https://avatars.githubusercontent.com/u/73503432?v=4"
                        class="rounded-full h-6 w-6"
                        alt="Learn with Sumit"
                    />
                </Link>

                <div clas="flex flex-col">
                    <Link to='videos/1'>
                        <p
                            class="text-slate-900 text-sm font-semibold"
                        >
                            Video title
                        </p>
                    </Link>
                    <Link
                        class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                        to='videos/1'
                    >
                        Learn with Sumit
                    </Link>
                    <p class="text-gray-400 text-xs mt-1">
                        200 views . May 3, 2022
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default VideoGridItem;