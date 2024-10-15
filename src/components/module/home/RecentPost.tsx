import { getResentPost } from "@/src/service/recentPost";
import Container from "../../Container";

const RecentPost = async () => {
    const data = await getResentPost()
    return (
        <Container>
            <div>
                <h1 className="text-3xl font-bold text-center py-5">Resent Post:</h1>
                <div className="grid grid-cols-4 gap-x-5">
                    {
                        data?.data?.map((item : any) => (
                            <div className="shadow-2xl p-2 m-5 rounded-lg">
                                <img className="w-full rounded-lg mb-2" src={item.images[0]} alt="" />
                                <h1 className="text-lg font-bold ">{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};

export default RecentPost;