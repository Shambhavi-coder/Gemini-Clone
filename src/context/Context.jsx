import { createContext } from "react";
import run from "../config/gemini";
import {  useState } from "react";
import {  useContext} from "react";


export const Context=createContext();
const ContextProvider=(props)=>{
        const[input,setInput]=useState("");
        const[recentPrompt,setRecentPrompt]=useState("");
        const[prevPrompts,setPrevPrompts]=useState([]);
        const[showResult,setShowResult]=useState(false);
        const[loading,setLoading]=useState(false);
        const[resultData,setResultData]=useState(false);
        
const delayPara=(index,nextWord)=>{
  setTimeout(function(){
 setResultData(prev=>prev+nextWord);
  },75*index)

}

const newChat=()=>{
  setLoading(false);
  setShowResult(false);
  
}
const onSent = async (prompt) => {
  setResultData("");
  setLoading(true);
  setShowResult(true);
  let response;
  if(prompt!==undefined)
  {
    response = await run(prompt); 
    setRecentPrompt(prompt);
  }
  else
  {
    setPrevPrompts(prev=>[...prev,input]);
  }
  
  let newResponse="";
try {
  const response = await run(input); 
  if (!response) {
      throw new Error("No response received from Gemini API");
  }

  let newResponse = response.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

  
  newResponse = newResponse.replace(/\*\s*/g, "<br> ");
  newResponse = newResponse.replace(/\*\s*/g, "<br> ");
  newResponse = newResponse.replace(/\n/g, "<br>")


  let newResponseArray=newResponse.split(" ");
  for(let i=0;i<newResponseArray.length;i++)
  {
    const nextWord=newResponseArray[i];
    delayPara(i,nextWord+" ");
  }
} catch (error) {
  console.error("Error fetching response:", error);
  setResultData("Error: Could not fetch response. Please try again.");
} finally {
  setLoading(false);
  setInput(""); 
}
};
    
    const contextValue={
prevPrompts,
setPrevPrompts,
onSent,
setRecentPrompt,
recentPrompt,
showResult,
loading,
resultData,
input,
setInput,newChat,

    }
    return ( <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
    )
}
export default ContextProvider;