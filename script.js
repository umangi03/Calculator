let string = "";
let stack = "",k="";
let buttons = document.querySelectorAll('.button');
let abs=0,sq=0;
let history=[];
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='Enter')
        {
            if(sq==1)
            {
                stack=stack+Math.sqrt(Number(k));
                sq=0;
                k="";
            }
            if(abs==1)
            {
                stack=stack+')';
                string=string+')';
                document.querySelector('#uinput').value=string;
                abs=0;
            }
            let ans=eval(stack);
            history.push(ans);
            document.querySelector('#output').value=ans;
        }
        else{
            if(e.target.innerHTML=='clear')
            {
                string="";
                stack="";
                document.querySelector('#output').value=0;
                sq=0;
                abs=0;
            }
            else if(e.target.innerHTML=='del')
            {
                stack=stack.substring(0,stack.length-1);
                string=string.substring(0,string.length-1);
            }
            else if(e.target.innerHTML=='ans')
            {
                string=history.pop();
                stack=string;
                document.querySelector('#output').value=stack;
                sq=0;
                abs=0;
            }
            else if(sq==1)
            {
                if(e.target.innerHTML>'0' && e.target.innerHTML<='9')
                {
                    k=k+e.target.innerHTML;
                    string=string+e.target.innerHTML;
                }
                else{
                    stack=stack+Math.sqrt(Number(k));
                    sq=0;
                    k="";
                }
            }
            else if(abs==1)
            {
                if(e.target.innerHTML>'0' && e.target.innerHTML<='9' || e.target.innerHTML=='-')
                {
                    stack=stack+e.target.innerHTML;
                    string=string+e.target.innerHTML;
                }
                else{
                    stack=stack+')'+e.target.innerHTML;
                    string=string+')'+e.target.innerHTML;
                    abs=0;
                }
            }
            else if(e.target.innerHTML=='x')
            {
                stack=stack+'*';
                string=string+e.target.innerHTML;
            }
            else if(e.target.innerHTML=='÷')
            {
                stack=stack+'/';
                string=string+e.target.innerHTML;
            }
            else if(e.target.innerHTML=='|x|')
            {
                abs=1;
                stack=stack+'-(';
                string=string+'-(';
            }
            else if(e.target.innerHTML=='√')
            {
                sq=1;
                string=string+e.target.innerHTML;
            }
            else if(e.target.innerHTML=='%')
            {
                let i=string.length-1;
                let idx=0;
                while(string.charAt(i)>='0' && string.charAt(i)<='9' && i>=0)
                {
                    i--;
                    idx++;
                }
                let num=string.substring(i+1);
                let k=stack.split("");
                while(idx>0)
                {
                    idx--;
                    k.pop();
                }
                stack=k.toString();
                stack=stack.replaceAll(',','');
                string=string+e.target.innerHTML;
                stack=stack+(num/100);
            }
            else{
                stack=stack+e.target.innerHTML;
                string=string+e.target.innerHTML;
            }
            
            document.querySelector('#uinput').value=string;
        }
    })
})