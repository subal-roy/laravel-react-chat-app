import { UsersIcon } from "@heroicons/react/24/outline";

const GroupAvater = () => {
    return (
        <>
            <div className={`avater placeholder`}>
                <div
                    className={`bg-gray-400 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center`}
                >
                    <span className="text-xl">
                        <UsersIcon className="w-4" />
                    </span>
                </div>
            </div>
        </>
    );
};

export default GroupAvater;
