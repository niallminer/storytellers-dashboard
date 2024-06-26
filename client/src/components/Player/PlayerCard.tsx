import { PlayerTag } from "../Tag/Tags";

const PlayerCard = () => {

    return (
        <div className="flex flex-col justify-center items-center rounded-xl bg-theme-purple-600 p-2 mr-4 w-28">
            <div
                className="rounded-full shadow-lg"
                style={{
                    backgroundImage: `url("https://via.placeholder.com/64x64")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "64px",
                    height: "64px",
                  }}
            ></div>
            <h1 className="text-md text-light mb-1">MediumUser MediumName</h1>
            <PlayerTag></PlayerTag>
        </div>
    );
}

export { PlayerCard };