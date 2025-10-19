import { useState } from "react";
import svgPaths from "./imports/svg-rt8ieadtxj";

function Bar({ value }: { value: number }) {
  return (
    <div
      className="absolute bg-neutral-900 h-[6px] left-0 rounded-bl-full rounded-tl-full top-1/2 translate-y-[-50%]"
      style={{ width: `${value}px` }}
      data-name="Bar"
    />
  );
}

function Button({ value }: { value: number }) {
  return (
    <div
      className="absolute bg-white rounded-[9999px] size-[20px] top-1/2 translate-y-[-50%] cursor-grab active:cursor-grabbing"
      style={{ left: `${value - 10}px` }}
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-neutral-900 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Slider() {
  const [value, setValue] = useState(135);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newValue = Math.min(Math.max(10, x), 435);
    setValue(newValue);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newValue = Math.min(Math.max(10, x), 435);
    setValue(newValue);
  };

  return (
    <div
      className="absolute bg-neutral-100 h-[6px] left-[495px] rounded-[9999px] top-[446px] w-[435px] cursor-pointer"
      data-name="Slider"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
    >
      <Bar value={value} />
      <Button value={value} />
    </div>
  );
}

function Circle({ filled }: { filled: boolean }) {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[16px]" data-name="Circle">
      {filled && (
        <div className="overflow-clip relative rounded-[inherit] size-[16px]">
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
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Radiogroup({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer" data-name="Radiogroup" onClick={onClick}>
      <Circle filled={selected} />
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
          {label}
        </p>
      </div>
    </div>
  );
}

function RadioGroup() {
  const [selected, setSelected] = useState("default");

  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[987px] top-[567px]" data-name="Radio_group">
      <Radiogroup label="Default" selected={selected === "default"} onClick={() => setSelected("default")} />
      <Radiogroup label="Comfortable" selected={selected === "comfortable"} onClick={() => setSelected("comfortable")} />
      <Radiogroup label="Compact" selected={selected === "compact"} onClick={() => setSelected("compact")} />
    </div>
  );
}

function Heading() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0" data-name="Heading">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
        Notify me about...
      </p>
    </div>
  );
}

function RadioGroup1({ selected, setSelected }: { selected: string; setSelected: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Radio_group">
      <Radiogroup label="All new messages" selected={selected === "all"} onClick={() => setSelected("all")} />
      <Radiogroup label="Direct messages and mentions" selected={selected === "direct"} onClick={() => setSelected("direct")} />
      <Radiogroup label="Nothing" selected={selected === "nothing"} onClick={() => setSelected("nothing")} />
    </div>
  );
}

function Frame3({ selected, setSelected }: { selected: string; setSelected: (value: string) => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-0 px-0 relative shrink-0">
      <Heading />
      <RadioGroup1 selected={selected} setSelected={setSelected} />
    </div>
  );
}

function Buttons({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="bg-neutral-900 box-border content-stretch flex flex-col gap-[10px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-neutral-800 transition-colors"
      data-name="Buttons"
      onClick={onClick}
    >
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">
          Submit
        </p>
      </div>
    </div>
  );
}

function Form() {
  const [selected, setSelected] = useState("all");

  const handleSubmit = () => {
    alert(`Form submitted! Notification preference: ${selected}`);
  };

  return (
    <div className="absolute content-stretch flex flex-col h-[181px] items-start left-[537px] top-[200px] w-[414px]" data-name="Form">
      <Frame3 selected={selected} setSelected={setSelected} />
      <Buttons onClick={handleSubmit} />
    </div>
  );
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
          {children}
        </p>
      </div>
    </div>
  );
}

function TableHeader1({ children }: { children: React.ReactNode }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
          {children}
        </p>
      </div>
    </div>
  );
}

function TableHeader2({ children }: { children: React.ReactNode }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
          {children}
        </p>
      </div>
    </div>
  );
}

function TableHeader3({ children }: { children: React.ReactNode }) {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-end justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <TableHeader>Invoice</TableHeader>
      <TableHeader1>Status</TableHeader1>
      <TableHeader2>Method</TableHeader2>
      <TableHeader3>Amount</TableHeader3>
    </div>
  );
}

function Row({ invoice, status, method, amount }: { invoice: string; status: string; method: string; amount: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[725px] hover:bg-neutral-50 transition-colors" data-name="Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">
            {invoice}
          </p>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[169px]" data-name="Table header">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">
            {status}
          </p>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[249px]" data-name="Table header">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">
            {method}
          </p>
        </div>
      </div>
      <div className="basis-0 grow h-[37px] min-h-px min-w-px relative shrink-0" data-name="Table header">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] h-[37px] items-end justify-center px-[8px] py-0 relative w-full">
            <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
                {amount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="bg-neutral-100 content-stretch flex items-start relative shrink-0 w-[725px]" data-name="Row">
      <div className="basis-0 grow h-[36.5px] min-h-px min-w-px relative shrink-0" data-name="Table header">
        <div className="flex flex-col justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] h-[36.5px] items-start justify-center p-[8px] relative w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
              <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-950 text-nowrap">
                Total
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[36.5px] items-end justify-center p-[8px] relative shrink-0 w-[206.6px]" data-name="Table header">
        <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="Text">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
            $2,500.00
          </p>
        </div>
      </div>
    </div>
  );
}

function Table() {
  const invoices = [
    { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
    { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
    { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
    { invoice: "INV006", status: "Pending", method: "Bank Transfer", amount: "$200.00" },
    { invoice: "INV007", status: "Unpaid", method: "Credit Card", amount: "$300.00" },
  ];

  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[6px] shrink-0" data-name="Table">
      <Header />
      {invoices.map((inv, index) => (
        <Row key={index} {...inv} />
      ))}
      <Row7 />
    </div>
  );
}

function Wapper() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Wapper">
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap whitespace-pre">
          A list of your recent invoices.
        </p>
      </div>
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

function NavButton({ label, hasDropdown = false }: { label: string; hasDropdown?: boolean }) {
  return (
    <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-neutral-100 transition-colors" data-name="Button">
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
          {label}
        </p>
      </div>
      {hasDropdown && (
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[4px] pr-0 py-0 relative shrink-0" data-name="Wrapper">
          <ChevronDown />
        </div>
      )}
    </div>
  );
}

function NavigationMenu() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-start left-[383px] top-[102px]" data-name="Navigation_menu">
      <NavButton label="Home" hasDropdown={true} />
      <NavButton label="Components" hasDropdown={true} />
      <NavButton label="Docs" />
      <NavButton label="List" hasDropdown={true} />
      <NavButton label="Simple" hasDropdown={true} />
      <NavButton label="With Icon" hasDropdown={true} />
    </div>
  );
}

export default function App() {
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
