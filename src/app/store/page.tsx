import PageCardStore from "@/components/PageCardStore";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import { fetchApi } from "@/helpers/fetch-api";
import { Book } from "@/interfaces/book";

interface StoreProps {
    books: Book[];
}

const getBooks = async (page = 1, pageSize = 1) => {
    const path = "/books";
    const urlParamsObject = {
        populate: "*",
        sort: {
            createdAt: "asc",
        },
        pagination: {
            page: page,
            pageSize: pageSize,
        },
    };

    const { data, meta } = await fetchApi(path, urlParamsObject);
    console.log(data);
    return { data: data, pagination: meta.pagination };
};

const Store = async (
    { searchParams }: { searchParams: { page?: string } },
    { books }: StoreProps
) => {
    const { page } = searchParams;
    let pageNumber = page ? parseInt(page) : 1;
    if (isNaN(pageNumber) || pageNumber < 1) {
        pageNumber = 1;
        console.log(
            "Valor no válido como parámetro de página. Se establece a 1. 🐤"
        );
    }

    const { data, pagination } = await getBooks(pageNumber);

    return (
        <div className="space-y-8">
            <PageHeader text="Book Store" />
            <Pagination pagination={pagination} />
            <section className="grid grid-cols-1 gap-4">
                {books.map((book) => (
                    <div>
                        <PageCardStore
                            key={book.id}
                            book={book}
                        />
                    </div>
                ))}
            </section>
        </div>
    );
};
export default Store;
