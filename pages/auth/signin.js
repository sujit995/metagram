import { getProviders, signIn } from 'next-auth/react';
import Header from "../../components/Header";

const signin = ({ providers }) => {
    return (
        <>
            <Header />
            <div className="flex justify-center space-x-7 mt-20">
                <img src="https://img.freepik.com/premium-vector/social-media-marketing-mobile-phone-concept_23-2148424880.jpg?w=2000" alt="meta-image" className="hidden object-cover rotate-6 md:inline-flex md:w-48" />
                <div className="">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name} className="flex flex-col items-center">
                            <img src="https://yt3.ggpht.com/MqiGe7ceGA8xRDRJnzXbZvSVXSG5U-e0Lxs17A4_MGGMXo3QEp0_1kmu-D9ZkUvETCgcamAWoQ=s900-c-k-c0x00ffffff-no-rj" alt="logo" className="w-32 object-cover" />
                            <p className="text-sm italic my-10 text-center">
                                This app is created for learning purposes
                            </p>
                            <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default signin;


export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: { providers },
    }
}