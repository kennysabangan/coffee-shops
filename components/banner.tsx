import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
    return (
        <div className={`mx-auto px-10 -mt-4 lg:px-20 h-2/3 flex items-center ${styles.bannerImage}`}>
            <div className="-mt-6 mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">Coffee Connoisseur</h2>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                Discover your local coffee shops!
                </p>
                <button
                type="button"
                className="mt-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                View Local Shops
                </button>
            </div>
        </div>
    )
}

export default Banner;
