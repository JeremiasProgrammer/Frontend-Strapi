import { formatDate } from "@/helpers/formatDate";
import { Post } from "@/interfaces/post";
import Image from "next/image";
import Link from "next/link";

interface Props {
    post: Post;
}

const PageCardImage = ({ post }: Props) => {
    const { title, description, slug, publishedAt, image } = post.attributes;
    const { url, width, height } = image.data.attributes.formats.medium;

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/blog/${slug}`}>
                <Image
                    className="rounded-t-lg w-full"
                    src={url}
                    alt={`imagen de ${title}`}
                    width={width}
                    height={height}
                />
            </Link>
            <div className="p-5">
                <Link href={`/blog/${slug}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </Link>
                <p className="text-gray-500 mb-2">{formatDate(publishedAt)}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Leer más
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};
export default PageCardImage;
