export default function Section5() {
    return (
        <div>
            <div className="w-[1921px] h-[574px] px-[220px] py-[140px] bg-[#043873] flex flex-col text-white items-center justify-between">
                <div className="w-[1481px] h-[294px] gap-[60px] flex flex-col justify-between items-center">
                    <div className="w-[1064px] h-[171px] gap-[24px] flex flex-col justify-between items-center">
                        <h1 className="font-inter text-[72px] font-[700] leading-[87.14px] tracking-tight">Your work, everywhere you are</h1>
                        <p className="font-inter text-[18px] font-[400] leading-[30px] tracking-tight text-center">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                    </div>
                </div>
                <button className="bg-[#4F9CF9] w-[195px] h-[63px] rounded-[8px] py-[20px] px-[40px] flex flex-row items-center justify-between">
                    <div className="font-inter text-[18px] font-[500] leading-[23px] text-white">Try Taskey</div>
                    <img src="/Arrow.png" alt="Logo" className="w-[10px] h-[10px]" />
                    </button>
                </div>
        </div>
    );
}