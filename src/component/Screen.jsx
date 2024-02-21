import React, { useState } from "react";

export default function Screen() {
  const [incom, setincome] = useState("0%");
  const [purchesPrice,setPurches] = useState(0)
  const [salePrice,setSalePrice] = useState(0)
  const [expen,setExpence] = useState(0);
  const [term,setTerm]= useState(true)
  const [per,setpe]= useState(0);
  const handelIncome = (e) => {
    setincome(e.target.value);
    if(e.target.value == '0%'){
        setpe(0);
    }else if(e.target.value == 'Nil+19% of excess over $18200'){
        setpe(19)
    }else if(e.target.value == '$5,092 + 32.5% of excess over $45,000'){
        setpe(32.5)
    }else if(e.target.value == '$29,467 +37% of excess over $120,000'){
        setpe(37)
    }else if(e.target.value == '$51,667 + 45% of excess over $180,000'){
        setpe(45)
    }
  };
  const handelTerm = (arg)=>{
    setTerm(arg)
  }
 const handelInput = (e,arg)=>{
    if(arg == 'purche'){
        setPurches(e.target.value)
    }else if(arg == 'sale'){
        setSalePrice(e.target.value)
    }else if(arg == 'expen'){
        setExpence(e.target.value)
    }
 }
  return (
    <div className="flex flex-col items-center gap-10">
      <h1>Free Crypto Tax calculation Australia</h1>
      <div className="flex gap-10">
        <p>
          Financial Year <span>FY 2023-24</span>
        </p>
        <p>
          country <span>Australia</span>
        </p>
      </div>
      <hr />
      <section className="flex gap-14">
        <div className="flex flex-col">
          <label htmlFor="">Enter purches price of Crypto</label>
          <input type="text" className="border" value={purchesPrice} onChange={(e)=>handelInput(e,'purche')}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Enter sale price of Crypto</label>
          <input type="text" className="border" value={salePrice} onChange={(e)=>handelInput(e,'sale')}/>
        </div>
      </section>
      <section className="flex gap-10">
        <div className="flex flex-col">
          <label htmlFor="">Enter your Expenses</label>
          <input type="text" className="border" value={expen} onChange={(e)=>handelInput(e,'expen')}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="inv">Investment Type</label>
          <div>
          <input type="radio" checked={term==false}  name="inv" onChange={()=>handelTerm(false)}/>
          Short term
          <input type="radio" checked={term==true} name="inv" onChange={()=>handelTerm(true)}/>
          longterm
          </div>
        </div>
      </section>
      <section className="flex items-center gap-10">
        <div className="flex flex-col">
        <label htmlFor="">Select your annual income</label>
        <select value={incom} onChange={(e)=>handelIncome(e)} >
          <option value="0%">$0-$18200</option>
          <option value="Nil+19% of excess over $18200">$18,201-$45,000</option>
          <option value="$5,092 + 32.5% of excess over $45,000">
            $45,000-$120,000
          </option>
          <option value="$29,467 +37% of excess over $120,000">
            $120,01-$180,000
          </option>
          <option value="$51,667 + 45% of excess over $180,000">
            $180,000+
          </option>
        </select>
        </div>
        <p>{incom}</p>
      </section>
      <section className="flex gap-10">
       {
        term? <>
        <div className="flex flex-col items-center">
        <label htmlFor="">capital gains amount</label>
        <p>{salePrice - purchesPrice - expen}</p>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Discount for long term gains</label>
        {salePrice - purchesPrice - expen>0?<p>{(salePrice - purchesPrice - expen)/2}</p>:<p>0</p>}
      </div>
        </>:<></>
       }
      </section>
      <section className="flex gap-10">
        <div className="flex flex-col items-center">
          <p>Net capital gain tax amount</p>
          {term?<p>${(salePrice - purchesPrice - expen)/2}</p>:<p>${(salePrice - purchesPrice - expen)}</p>}
        </div>
        <div className="flex flex-col items-center">
            <p>The tax you need to pay</p>
            {term?<p>${(((salePrice - purchesPrice - expen)/2)*per)/100}</p>:<p>${(((salePrice - purchesPrice - expen))*per)/100}</p>}
        </div>
      </section>
    </div>
  );
}
