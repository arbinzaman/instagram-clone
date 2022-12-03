import React from 'react';

const Article = () => {
    return (
        <div>
            <section>
                <div className="bg-base-300">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Creating Jute Goods Since 2018</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Janata Jute Mills Ltd & Sadat Jute Industries Ltd – which combined together, is the largest manufacturer & exporter of Jute products in the Bangladesh.Our exports of yarn is approx. 100,000 metric tons/annum at present. In addition, we manufacture approx. 40,000 metric tons/annum of woven and other products.During the last 23 years, our Mills have received the National Export Award on 20 occasions, in addition to various other National & International awards.</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1635352416535-2f4f0d06237d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
        </div>
    );
};

export default Article;