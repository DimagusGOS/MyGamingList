export default function PopularConsoles() {

    return (
        <div className="flex flex-col w-2/7">
            <h2 className="text-3xl font-bold mb-6 text-left">Popular Consoles</h2>
            <div className="flex flex-col py-12 text-left pl-8">
                <ul className="my-4">
                    <b>Console 1</b>
                    <li>Top 1 game</li>
                    <li>Top 2 game</li>
                    <li>Top 3 game</li>
                </ul>
                <ul className="my-4">
                    <b>Console 2</b>
                    <li>Top 1 game</li>
                    <li>Top 2 game</li>
                    <li>Top 3 game</li>
                </ul>
                <ul className="my-4">
                    <b>Console 3</b>
                    <li>Top 1 game</li>
                    <li>Top 2 game</li>
                    <li>Top 3 game</li>
                </ul>

            </div>
        </div>
    )
}