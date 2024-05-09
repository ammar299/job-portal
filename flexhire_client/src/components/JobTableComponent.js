import React from "react";

function ProfileComponent(props) {
    const jobs = props.jobs;
    const count = jobs !== undefined ? jobs.totalCount : 0;
    var nodes = [];
    nodes = jobs !== undefined ? jobs.nodes : [];

    const data = nodes.map((node) => {
        return {
            rawId: node['job'].rawId,
            title: node['job'].title,
            status: node['job'].status,
            description: node['job'].description,
        };
    });

    const jobList = data !== undefined ? data : [];

    return (
        <>
            <main className="profile-page">
                <section className="relative block h-[500px]">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover bg-images-wall">
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex justify-center items-center min-w-0 break-words bg-white w-full shadow-xl rounded-lg -mt-64 py-36">
                            <h1 className="text-5xl text-black font-medium">Jobs ({count})</h1>
                        </div>
                    </div>
                </section>
                <section className="w-full mx-auto text-white">
                    <div className="overflow-x-auto">
                        <table className="table bg-[#696969] rounded-none">
                            {/* head */}
                            <thead className="text-white font-bold">
                                <tr>
                                    <th>RawId</th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* body */}
                                {jobList.map((node, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{node.rawId}</td>
                                            <td>{node.title}</td>
                                            <td>{node.description}</td>
                                            <td>{node.status}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ProfileComponent;
