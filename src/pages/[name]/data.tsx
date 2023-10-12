import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {notFound} from "next/navigation";
import {UserData} from "@/model/user-data";
import {getUserData} from "@/api/users";
export const getServerSideProps = (async (context) => {
    if (context.params?.name) {
        try {
            const userData = await getUserData(context.params.name);
            return {
                props: {
                    userData
                }
            };
        } catch (e) {
            notFound();
        }
    }
    notFound();
    //redirection
}) satisfies GetServerSideProps<{ userData: UserData }, { name: string }>;
export default function PersonalData({userData}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <div className="container w-4/6 py-10">
                {userData.name}
                {userData.email}
                {userData.password}
            </div>
        </div>
    )
}