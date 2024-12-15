
export interface Blog{
    title: string;
    date: string;
    description: string;
    image: string ;
    imageAlt: string;
    slug: string;
}


const J_Blog: Blog[] = [
    {
        title: "blog 1",
        date: "wed oct 23",
        description: "first blog",
        image:"https://media.licdn.com/dms/image/v2/C560BAQGDbdhpmxRmrg/company-logo_200_200/company-logo_200_200/0/1633548685050/hack4impact_logo?e=2147483647&v=beta&t=Cgni3x2P5I8nwhyAaHkblCo0OP6yx857PLG7O5Zw_W4",
        imageAlt:"random image",
        slug: "./blog/blog1.html"
    },
    {
        title: "blog 2",
        date: "wed oct 24", 
        description: "working on my bootcamp project",
        image:"https://media.licdn.com/dms/image/v2/C560BAQGDbdhpmxRmrg/company-logo_200_200/company-logo_200_200/0/1633548685050/hack4impact_logo?e=2147483647&v=beta&t=Cgni3x2P5I8nwhyAaHkblCo0OP6yx857PLG7O5Zw_W4",
        imageAlt:"random image",
        slug:"./blog/blog2.html" 
    }

];
export default J_Blog;