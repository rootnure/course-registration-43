const RegistrationSummary = () => {
    return (
        <aside className="relative">
            <div className="p-6 bg-white rounded-xl space-y-6 absolute top-6">
                <h3 className="text-xl font-bold text-blue-400">Credit Hour Remaining {0} hr</h3>
                <hr />
                <h2 className="text-2xl font-bold">Course Name</h2>
                <ol className="text-lg text-gray-500 list-decimal list-inside">
                    <li>Intro</li>
                    <li>Mid</li>
                    <li>Advance</li>
                </ol>
                <hr />
                <h3 className="text-xl font-semibold">Total Credit Hour : {0}</h3>
                <hr />
                <h3 className="text-xl font-bold">Total Price : {0} USD</h3>
            </div>
        </aside>
    );
};

export default RegistrationSummary;