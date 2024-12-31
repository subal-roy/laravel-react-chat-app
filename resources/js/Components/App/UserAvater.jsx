const UserAvater = ({ user, online, profile = false }) => {
    let onlineClass =
        online === true ? "online" : online === false ? "offline" : "";
    const sizeClass = profile ? "w-40" : "w-8";

    return (
        <>
            {user.avater_url ? (
                <div className={`chat-image avatar ${onlineClass}`}>
                    <div className={`rounded-full ${sizeClass} avatar`}>
                        <img src={user.avater_url} />
                    </div>
                </div>
            ) : (
                <div className={`chat-image avatar placeholder ${onlineClass}`}>
                    <div
                        className={`bg-gray-400 text-gray-800 rounded-full ${sizeClass}`}
                    >
                        <span className="text-xl">
                            {user.name.substring(0, 1)}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserAvater;
