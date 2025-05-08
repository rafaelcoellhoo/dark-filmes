export default function CardFilme() {
  return (
    <div className="w-[280px] h-[250px] flex flex-col rounded-lg bg-[#222222]">
      <div className="w-full h-[70%] rounded-t-lg">
        <img
          className="w-full h-full rounded-t-lg object-cover"
          src="https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/d6e0ae20-7d97-467c-ba5d-a3beaa33641d/dee0582fda3787bd033dc03f6d595ea1d4e03451.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom"
          alt=""
        />
      </div>
      <div className="w-full h-[30%] flex flex-col pt-2 px-4">
        <p className="text-[14px] font-bold">Seven - Os Sete Crimes Capitais</p>
        <p className="text-[14px] text-[#8a898c]">David Fincher</p>
        <div className="w-full flex justify-between">
            <p className="text-[12px] pt-1 text-[#8a898c]">1995</p>
            <div className="px-2 py-0 text-[12px] text-[#8f7bd8] bg-[#8f7bd8]/10 rounded-lg">Crime</div>
        </div>
      </div>
    </div>
  );
}
