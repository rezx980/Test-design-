"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import {
  Upload,
  FileSpreadsheet,
  Download
} from "lucide-react";


export default function ConvertPage(){

const [data,setData] = useState<any[]>([]);
const [columns,setColumns] = useState<string[]>([]);



function handleFile(e:any){

const file=e.target.files[0];

if(!file)return;


const reader=new FileReader();


reader.onload=(event:any)=>{


const workbook=XLSX.read(
event.target.result,
{
type:"binary"
}
);


const sheet =
workbook.Sheets[
workbook.SheetNames[0]
];


const json =
XLSX.utils.sheet_to_json(sheet);


if(json.length){

setData(json);

setColumns(
Object.keys(json[0] as object)
);

}


};


reader.readAsBinaryString(file);

}



return (

<main className="
min-h-screen
bg-black
text-white
p-8
">


<div className="
max-w-5xl
mx-auto
">


<h1 className="
text-5xl
font-bold
text-center
mt-10
">

Excel → Line Chart

</h1>


<p className="
text-center
text-gray-400
mt-4
">

ارفع ملف Excel وشاهد الرسم البياني مباشرة

</p>



<div className="
mt-10
rounded-3xl
bg-white/10
border border-white/20
p-10
text-center
">


<FileSpreadsheet
size={60}
className="mx-auto text-green-400"
/>



<label className="
inline-flex
items-center
gap-3
mt-6
bg-cyan-500
text-black
px-8
py-4
rounded-full
cursor-pointer
font-bold
">


<Upload/>

رفع ملف Excel


<input
type="file"
accept=".xlsx,.xls"
hidden
onChange={handleFile}
/>


</label>


</div>





{
data.length>0 &&

<div className="
mt-10
bg-white
rounded-3xl
p-6
text-black
">


<h2 className="
text-2xl
font-bold
mb-5
">

النتيجة

</h2>


<ResponsiveContainer
width="100%"
height={400}
>


<LineChart data={data}>


<XAxis
dataKey={columns[0]}
/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey={columns[1]}

stroke="#06b6d4"

strokeWidth={4}

/>


</LineChart>


</ResponsiveContainer>


</div>


}



</div>


</main>

)

}
