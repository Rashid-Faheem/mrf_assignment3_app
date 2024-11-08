export default function Sponsors() {
    return (
        <div>
            <div className="w-[1921px] h-[538px] px-[220px] py-[140px] flex flex-col gap-[100px] bg-white items-center justify-between">
                <h1 className="font-inter text-[72px] font-[700] leading-[87.14px] tracking-tight text-center">Our sponsors</h1>
                <div className="flex justify-between items-center w-[1482px]">
                    <img src="./Apple.png" alt="Apple" />
                    <img src="./Microsoft.png" alt="Microsoft" />
                    <img src="./Slack.png" alt="Slack" />
                    <img src="./Google.png" alt="Google" />
                </div>
            </div>
        </div>
    );
}