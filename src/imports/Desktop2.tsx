import svgPaths from "./svg-rt8ieadtxj";

function Bar() {
  return <div className="absolute bg-neutral-900 h-[6px] left-0 rounded-bl-full rounded-tl-full top-1/2 translate-y-[-50%] w-[135px]" data-name="Bar" />;
}

function Button() {
  return (
    <div className="absolute bg-white left-[125px] rounded-[9999px] size-[20px] top-1/2 translate-y-[-50%]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-900 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute bg-neutral-100 h-[6px] left-[495px] rounded-[9999px] top-[446px] w-[435px]" data-name="Slider">
      <Bar />
      <Button />
    </div>
  );
}

function Circle() {
  return (
    <div className="absolute left-[4px] size-[8px] top-[4px]" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_1_25)" id="circle">
          <path d={svgPaths.p3e71aa30} fill="var(--fill-0, #171717)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Circle1() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[16px]" data-name="Circle">
      <div className="overflow-clip relative rounded-[inherit] size-[16px]">
        <Circle />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Radiogroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radiogroup">
      <Circle1 />
      <Text />
    </div>
  );
}

function Circle2() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[16px]" data-name="Circle">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Comfortable</p>
    </div>
  );
}

function Radiogroup1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radiogroup">
      <Circle2 />
      <Text1 />
    </div>
  );
}

function Circle3() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[16px]" data-name="Circle">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Compact</p>
    </div>
  );
}

function Radiogroup2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radiogroup">
      <Circle3 />
      <Text2 />
    </div>
  );
}

function RadioGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[987px] top-[567px]" data-name="Radio_group">
      <Radiogroup />
      <Radiogroup1 />
      <Radiogroup2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0" data-name="Heading">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Notify me about...</p>
    </div>
  );
}

function Circle4() {
  return (
    <div className="absolute left-[4px] size-[8px] top-[4px]" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_1_25)" id="circle">
          <path d={svgPaths.p3e71aa30} fill="var(--fill-0, #171717)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Circle5() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[16px]" data-name="Circle">
      <div className="overflow-clip relative rounded-[inherit] size-[16px]">
        <Circle4 />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">All new messages</p>
    </div>
  );
}

function Radiogroup3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radiogroup">
      <Circle5 />
      <Text3 />
    </div>
  );
}

function Circle6() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[16px]" data-name="Circle">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Direct messages and mentions</p>
    </div>
  );
}

function Radiogroup4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radiogroup">
      <Circle6 />
      <Text4 />
    </div>
  );
}

function Circle7() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[16px]" data-name="Circle">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Nothing</p>
    </div>
  );
}

function Radiogroup5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radiogroup">
      <Circle7 />
      <Text5 />
    </div>
  );
}

function RadioGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Radio_group">
      <Radiogroup3 />
      <Radiogroup4 />
      <Radiogroup5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-0 px-0 relative shrink-0">
      <Heading />
      <RadioGroup1 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Submit</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-neutral-900 box-border content-stretch flex flex-col gap-[10px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text6 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col h-[181px] items-start left-[537px] top-[200px] w-[414px]" data-name="Form">
      <Frame3 />
      <Buttons />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Invoice</p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Status</p>
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Method</p>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Amount</p>
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-end justify-center px-[8px] py-0 relative w-full">
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <TableHeader />
      <TableHeader1 />
      <TableHeader2 />
      <TableHeader3 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">INV001</p>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Paid</p>
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Credit Card</p>
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">$250.00</p>
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="basis-0 grow h-[37px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-end justify-center px-[8px] py-0 relative w-full">
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <TableHeader4 />
      <TableHeader5 />
      <TableHeader6 />
      <TableHeader7 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">INV002</p>
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Pending</p>
    </div>
  );
}

function TableHeader9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">PayPal</p>
    </div>
  );
}

function TableHeader10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">$150.00</p>
    </div>
  );
}

function TableHeader11() {
  return (
    <div className="basis-0 grow h-[37px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-end justify-center px-[8px] py-0 relative w-full">
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <TableHeader8 />
      <TableHeader9 />
      <TableHeader10 />
      <TableHeader11 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">INV003</p>
    </div>
  );
}

function TableHeader12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Unpaid</p>
    </div>
  );
}

function TableHeader13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Bank Transfer</p>
    </div>
  );
}

function TableHeader14() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">$350.00</p>
    </div>
  );
}

function TableHeader15() {
  return (
    <div className="basis-0 grow h-[37px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-end justify-center px-[8px] py-0 relative w-full">
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <TableHeader12 />
      <TableHeader13 />
      <TableHeader14 />
      <TableHeader15 />
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">INV004</p>
    </div>
  );
}

function TableHeader16() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Paid</p>
    </div>
  );
}

function TableHeader17() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Credit Card</p>
    </div>
  );
}

function TableHeader18() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">$450.00</p>
    </div>
  );
}

function TableHeader19() {
  return (
    <div className="basis-0 grow h-[37px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-end justify-center px-[8px] py-0 relative w-full">
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <TableHeader16 />
      <TableHeader17 />
      <TableHeader18 />
      <TableHeader19 />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">INV005</p>
    </div>
  );
}

function TableHeader20() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Paid</p>
    </div>
  );
}

function TableHeader21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <Text28 />
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">PayPal</p>
    </div>
  );
}

function TableHeader22() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">$550.00</p>
    </div>
  );
}

function TableHeader23() {
  return (
    <div className="basis-0 grow h-[37px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-end justify-center px-[8px] py-0 relative w-full">
          <Text30 />
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <TableHeader20 />
      <TableHeader21 />
      <TableHeader22 />
      <TableHeader23 />
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">INV006</p>
    </div>
  );
}

function TableHeader24() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Pending</p>
    </div>
  );
}

function TableHeader25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Bank Transfer</p>
    </div>
  );
}

function TableHeader26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">$200.00</p>
    </div>
  );
}

function TableHeader27() {
  return (
    <div className="basis-0 grow h-[37px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-end justify-center px-[8px] py-0 relative w-full">
          <Text34 />
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <TableHeader24 />
      <TableHeader25 />
      <TableHeader26 />
      <TableHeader27 />
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">INV007</p>
    </div>
  );
}

function TableHeader28() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Unpaid</p>
    </div>
  );
}

function TableHeader29() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Credit Card</p>
    </div>
  );
}

function TableHeader30() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">$300.00</p>
    </div>
  );
}

function TableHeader31() {
  return (
    <div className="basis-0 grow h-[37px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-end justify-center px-[8px] py-0 relative w-full">
          <Text38 />
        </div>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <TableHeader28 />
      <TableHeader29 />
      <TableHeader30 />
      <TableHeader31 />
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">Total</p>
    </div>
  );
}

function TableHeader32() {
  return (
    <div className="basis-0 grow h-[36.5px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36.5px] items-start justify-center p-[8px] relative w-full">
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">$2,500.00</p>
    </div>
  );
}

function TableHeader33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[36.5px] items-end justify-center p-[8px] relative shrink-0 w-[206.6px]" data-name="Table header">
      <Text40 />
    </div>
  );
}

function Row7() {
  return (
    <div className="bg-neutral-100 content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <TableHeader32 />
      <TableHeader33 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[6px] shrink-0" data-name="Table">
      <Header />
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap whitespace-pre">A list of your recent invoices.</p>
    </div>
  );
}

function Wapper() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Wapper">
      <Text41 />
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[338px] items-center left-[212px] top-[530px] w-[694px]" data-name="Table">
      <Table />
      <Wapper />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[4px] pr-0 py-0 relative shrink-0" data-name="Wrapper">
      <ChevronDown />
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <Text42 />
      <Wrapper />
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Components</p>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[4px] pr-0 py-0 relative shrink-0" data-name="Wrapper">
      <ChevronDown1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <Text43 />
      <Wrapper1 />
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Docs</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <Text44 />
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">List</p>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[4px] pr-0 py-0 relative shrink-0" data-name="Wrapper">
      <ChevronDown2 />
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <Text45 />
      <Wrapper2 />
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Simple</p>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[4px] pr-0 py-0 relative shrink-0" data-name="Wrapper">
      <ChevronDown3 />
    </div>
  );
}

function Button5() {
  return (
    <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <Text46 />
      <Wrapper3 />
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">With Icon</p>
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[4px] pr-0 py-0 relative shrink-0" data-name="Wrapper">
      <ChevronDown4 />
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <Text47 />
      <Wrapper4 />
    </div>
  );
}

function NavigationMenu() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-start left-[383px] top-[102px]" data-name="Navigation_menu">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

export default function Desktop2() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 2">
      <Slider />
      <RadioGroup />
      <Form />
      <Table1 />
      <NavigationMenu />
    </div>
  );
}