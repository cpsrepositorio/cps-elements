import{a as z}from"./chunk.RBI3DNF7.js";import{b as I}from"./chunk.2YZHDAPC.js";import{a as V}from"./chunk.SYMZGPTI.js";import{a as k}from"./chunk.MESFKACX.js";import{a as F,b as m,c as w,d as S,e as E}from"./chunk.WBB6ER6A.js";import{e as D}from"./chunk.QJBMNVJB.js";import{c as O,e as c}from"./chunk.K3RV6SX6.js";var l=class extends E{constructor(){super();this.localize=new I(this);this.value="";this.min="";this.max="";this.hideFooter=!1;this.hideOutside=!1;this.firstDayOfWeek=null;this.disableWeekdays="";this.disableDates="";this.currentMonth=0;this.currentYear=0;this.selectedDate=null;this.calendarData=[];this.focusedCell=null;this.currentView="days";this.previousView=null;this.handleGridKeyDown=O(e=>{var y,u,d;if(!this.focusedCell)return;let{row:s,col:a}=this.focusedCell,r=s,i=a,t=this.calendarData.length-1,n=((y=this.calendarData[0])==null?void 0:y.length)-1||6;switch(e.key){case"ArrowLeft":i=a>0?a-1:n,r=a>0?s:s>0?s-1:t;break;case"ArrowRight":i=a<n?a+1:0,r=a<n?s:s<t?s+1:0;break;case"ArrowUp":r=s>0?s-1:t;break;case"ArrowDown":r=s<t?s+1:0;break;default:return}let o=!1,h=0;for(;h<this.calendarData.length*this.calendarData[0].length;){let v=(d=(u=this.calendarData)==null?void 0:u[r])==null?void 0:d[i];if(v&&!v.isDisabled&&!v.isOutsideMonth){o=!0;break}e.key==="ArrowLeft"?(i=i>0?i-1:n,r=i===n?r>0?r-1:t:r):e.key==="ArrowRight"?(i=i<n?i+1:0,r=i===0?r<t?r+1:0:r):e.key==="ArrowUp"?r=r>0?r-1:t:e.key==="ArrowDown"&&(r=r<t?r+1:0),h++}o&&(e.preventDefault(),this.focusedCell={row:r,col:i},this.focusCurrentCell())},"handleGridKeyDown");this.initializeCalendar()}connectedCallback(){super.connectedCallback(),this.initializeCalendar(),this.addEventListener("keydown",this.handleGridKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleGridKeyDown)}updated(){this.focusCurrentCell()}previous(){this.currentView==="years"?this.currentYear=Math.floor(this.currentYear/10)*10-10:this.currentView==="months"?this.currentYear--:(this.currentMonth--,this.currentMonth<0&&(this.currentMonth=11,this.currentYear--)),this.generateCalendarData()}next(){this.currentView==="years"?this.currentYear=Math.floor(this.currentYear/10)*10+10:this.currentView==="months"?this.currentYear++:(this.currentMonth++,this.currentMonth>11&&(this.currentMonth=0,this.currentYear++)),this.generateCalendarData()}clear(){this.value="",this.selectedDate=null,this.currentYear=new Date().getFullYear(),this.currentMonth=new Date().getMonth(),this.currentView="days",this.generateCalendarData(),this.emit("cps-change",{detail:{value:this.value,valueAsDate:this.selectedDate}})}today(){let e=new Date;e.setHours(0,0,0,0),this.value=e.toISOString().split("T")[0],this.selectedDate=e,this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth(),this.currentView="days",this.generateCalendarData(),this.emit("cps-change",{detail:{value:this.value,valueAsDate:this.selectedDate}})}initializeCalendar(){let e=new Date;e.setHours(0,0,0,0),this.value&&(this.selectedDate=this.parseDate(this.value,"startOfDay")),this.selectedDate?(this.currentYear=this.selectedDate.getFullYear(),this.currentMonth=this.selectedDate.getMonth()):(this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth()),this.generateCalendarData()}parseDate(e,s){let a=e.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?)?$/);if(!a)return null;let r=parseInt(a[1],10),i=parseInt(a[2],10)-1,t=parseInt(a[3],10),n=!!a[4],o=n?parseInt(a[4],10):0,h=n?parseInt(a[5],10):0,y=n?parseInt(a[6],10):0,u=n?parseInt(a[7],10):0;if(isNaN(r)||isNaN(i)||isNaN(t)||i<0||i>11||t<1||t>31)return null;let d=new Date(r,i,t,o,h,y,u);return d.getFullYear()!==r||d.getMonth()!==i||d.getDate()!==t?null:(n||(s==="startOfDay"?d.setHours(0,0,0,0):s==="endOfDay"&&d.setHours(23,59,59,999)),d)}handleValueChange(){let e=this.value?this.parseDate(this.value,"startOfDay"):null;this.areDatesEqual(this.selectedDate,e)||(this.selectedDate=e,this.selectedDate?this.currentYear!==this.selectedDate.getFullYear()||this.currentMonth!==this.selectedDate.getMonth()?(this.currentYear=this.selectedDate.getFullYear(),this.currentMonth=this.selectedDate.getMonth(),this.generateCalendarData()):this.updateCalendarSelection():this.updateCalendarSelection(),this.emit("cps-change",{detail:{value:this.value,valueAsDate:this.selectedDate}}))}areDatesEqual(e,s){return e===null&&s===null?!0:e===null||s===null?!1:e.getFullYear()===s.getFullYear()&&e.getMonth()===s.getMonth()&&e.getDate()===s.getDate()}formatDateToISO(e){if(!e)return"";let s=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${s}-${a}-${r}`}updateCalendarSelection(){if(!this.calendarData.length)return;let e=!1;for(let s of this.calendarData)for(let a of s){let r=new Date(a.year,a.month,a.day);r.setHours(0,0,0,0);let i=a.isSelected;a.isSelected=this.selectedDate!==null&&this.areDatesEqual(r,this.selectedDate),i!==a.isSelected&&(e=!0)}e&&this.requestUpdate()}handleOptionsChange(){this.generateCalendarData()}getFirstDayOfWeekIndex(){let e=this.firstDayOfWeek||this.localize.term("$firstDayOfWeek");return["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].indexOf(e)}generateCalendarData(){var v,x;let e=new Date(this.currentYear,this.currentMonth+1,0).getDate(),s=new Date(this.currentYear,this.currentMonth,1).getDay(),a=this.getFirstDayOfWeekIndex(),r=(s-a+7)%7,i=new Date(this.currentYear,this.currentMonth,0).getDate(),t=new Date;t.setHours(0,0,0,0);let n=this.min?this.parseDate(this.min,"startOfDay"):null,o=this.max?this.parseDate(this.max,"endOfDay"):null,h=(((v=this.disableWeekdays)==null?void 0:v.split(","))||[]).map(f=>["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].indexOf(f.trim())).filter(f=>f!==-1),y=(((x=this.disableDates)==null?void 0:x.split(","))||[]).map(f=>this.parseDate(f.trim(),"startOfDay")).filter(f=>f!==null),u=[],d=1-r;for(let f=0;f<6;f++){let $=[];for(let Y=0;Y<7;Y++){let _,p,b;d<=0?(_=i+d,p=this.currentMonth-1,b=this.currentYear,p<0&&(p=11,b--)):d>e?(_=d-e,p=this.currentMonth+1,b=this.currentYear,p>11&&(p=0,b++)):(_=d,p=this.currentMonth,b=this.currentYear);let g=new Date(b,p,_);g.setHours(0,0,0,0);let L=this.areDatesEqual(g,t),T=this.selectedDate!==null&&this.areDatesEqual(g,this.selectedDate),W=p!==this.currentMonth,M=!1;n&&g<n&&(M=!0),o&&g>o&&(M=!0),h.includes(g.getDay())&&(M=!0),y.some(H=>this.areDatesEqual(g,H))&&(M=!0),$.push({day:_,month:p,year:b,isOutsideMonth:W,isToday:L,isSelected:T,isDisabled:M,date:new Date(g)}),d++}if(f<5||$.some(Y=>Y.month===this.currentMonth))u.push($);else break}this.calendarData=u}handleDayClick(e){if(e.isDisabled)return;let s=new Date(e.year,e.month,e.day);if(!this.selectedDate||!this.areDatesEqual(s,this.selectedDate)){this.selectedDate=s;let a=this.formatDateToISO(s);this.value=a,this.updateCalendarSelection(),this.emit("cps-change",{detail:{type:"date",value:a,date:new Date(s)}})}e.isOutsideMonth&&(this.currentMonth=e.month,this.currentYear=e.year,this.generateCalendarData())}handleMonthClick(e){this.previousView=this.currentView,this.currentView="days",this.currentMonth=e,this.generateCalendarData()}handleYearClick(e){this.previousView=this.currentView,this.currentView="months",this.currentYear=e,this.generateCalendarData()}focusCurrentCell(){var t,n;if(!this.focusedCell)return;let{row:e,col:s}=this.focusedCell,a=(n=(t=this.calendarData)==null?void 0:t[e])==null?void 0:n[s];if(!a)return;let r=`${a.year}-${String(a.month+1).padStart(2,"0")}-${String(a.day).padStart(2,"0")}`,i=this.renderRoot.querySelector(`.calendar__cell[data-date="${r}"]`);i==null||i.focus()}toggleView(){let e;this.currentView==="days"||this.currentView==="years"?e="months":e=this.previousView==="years"?"days":"years",this.previousView=this.currentView,this.currentView=e}renderDaysGrid(){let e=new Date,s=[],a=this.getFirstDayOfWeekIndex();for(let r=0;r<7;r++){let i=(a+r)%7,t=new Date(2e3,0,2+i);s.push(this.localize.date(t,{weekday:"narrow"}))}return D`
      <div part="grid" class="calendar__grid calendar__grid--days">
        ${s.map(r=>D`<div part="weekday" class="calendar__weekday">${r}</div>`)}
        ${this.calendarData.map((r,i)=>r.map((t,n)=>{if(this.hideOutside&&t.isOutsideMonth)return D`<div class="calendar__cell calendar__cell--outside"></div>`;let o=!this.hideOutside&&t.isOutsideMonth,h=t.year===e.getFullYear()&&t.month===e.getMonth()&&t.day===e.getDate(),y=["cell",h&&"cell--today",t.isSelected&&"cell--selected",o&&"cell--outside",t.isDisabled&&"cell--disabled"].filter(Boolean).join(" "),u=`${t.year}-${String(t.month+1).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`;return D`
              <button
                type="button"
                part=${y}
                class=${k({calendar__cell:!0,"calendar__cell--today":h,"calendar__cell--selected":t.isSelected,"calendar__cell--outside":o,"calendar__cell--disabled":t.isDisabled})}
                data-date=${u}
                ?disabled=${t.isDisabled}
                @click=${()=>{this.handleDayClick(t),this.focusedCell={row:i,col:n}}}
                aria-label=${u}
              >
                ${t.day}
              </button>
            `}))}
      </div>
    `}renderMonthsGrid(){let e=new Date,s=e.getMonth(),a=e.getFullYear(),r=Array.from({length:12},(n,o)=>({index:o,name:this.localize.date(new Date(2e3,o,1),{month:"short"})})),i=this.selectedDate?this.selectedDate.getFullYear():null,t=this.selectedDate?this.selectedDate.getMonth():null;return D`
      <div part="grid" class="calendar__grid calendar__grid--months">
        ${r.map(n=>{let o=i===this.currentYear&&t===n.index,h=this.currentYear===a&&n.index===s,y=["cell",h&&"cell--today",o&&"cell--selected"].filter(Boolean).join(" ");return D`
            <button
              type="button"
              part=${y}
              class=${k({calendar__cell:!0,"calendar__cell--today":h,"calendar__cell--selected":o})}
              @click=${()=>this.handleMonthClick(n.index)}
            >
              ${n.name}
            </button>
          `})}
      </div>
    `}renderYearsGrid(){let s=new Date().getFullYear(),a=Math.floor(this.currentYear/10)*10,r=[];for(let t=-1;t<11;t++)r.push(a+t);let i=[];for(let t=0;t<12;t+=3)i.push(r.slice(t,t+3));return D`
      <div part="grid" class="calendar__grid calendar__grid--years">
        ${i.map(t=>t.map(n=>{let o=n<a||n>a+9,h=!!this.selectedDate&&n===this.selectedDate.getFullYear(),y=n===s;if(this.hideOutside&&o)return D`<div class="calendar__cell calendar__cell--outside"></div>`;let u=!this.hideOutside&&o,d=["cell",y&&"cell--today",h&&"cell--selected",u&&"cell--outside"].filter(Boolean).join(" ");return D`
              <button
                type="button"
                part=${d}
                class=${k({calendar__cell:!0,"calendar__cell--today":y,"calendar__cell--selected":h&&!u,"calendar__cell--outside":u})}
                @click=${()=>this.handleYearClick(n)}
                aria-disabled="false"
              >
                ${n}
              </button>
            `}))}
      </div>
    `}renderHeader(){let e;if(this.currentView==="years"){let a=Math.floor(this.currentYear/10)*10,r=a+9;e=`${a}\u2013${r}`}else this.currentView==="months"?e=`${this.currentYear}`:e=`${this.localize.date(new Date(this.currentYear,this.currentMonth,1),{month:"long"})} ${this.currentYear}`;let s=this.currentView==="days"||this.currentView==="months"&&this.previousView==="days"?"up":"down";return D`
      <div part="header" class="calendar__header">
        <button
          part="previous-button"
          class="calendar__navigation-button"
          @click=${this.previous}
          aria-label=${this.localize.term("previous")}
        >
          <cps-icon name="chevron-left" library="system"></cps-icon>
        </button>

        <button
          type="button"
          part="title"
          class=${k({calendar__title:!0,[`caret-${s}`]:!0})}
          @click=${this.toggleView}
        >
          ${e}
          <cps-icon name="caret" library="system" size="small"></cps-icon>
        </button>

        <button
          part="next-button"
          class="calendar__navigation-button"
          @click=${this.next}
          aria-label=${this.localize.term("next")}
        >
          <cps-icon name="chevron-right" library="system"></cps-icon>
        </button>
      </div>
    `}renderFooter(){return this.hideFooter?null:D`
      <div part="footer" class="calendar__footer">
        ${this.value?D`
              <button part="clear-link" class="calendar__link calendar__link--clear" @click=${this.clear} type="button">
                ${this.localize.term("clear")}
              </button>
            `:""}

        <button part="today-link" class="calendar__link calendar__link--today" @click=${this.today} type="button">
          ${this.localize.term("today")}
        </button>
      </div>
    `}render(){return D`
      <div part="base" class="calendar">
        ${this.renderHeader()}
        ${this.currentView==="years"?this.renderYearsGrid():this.currentView==="months"?this.renderMonthsGrid():this.renderDaysGrid()}
        ${this.renderFooter()}
      </div>
    `}};O(l,"CpsCalendar"),l.styles=z,c([S(".calendar")],l.prototype,"calendar",2),c([S(".calendar__grid")],l.prototype,"calendarGrid",2),c([m()],l.prototype,"value",2),c([m()],l.prototype,"min",2),c([m()],l.prototype,"max",2),c([m({type:Boolean,attribute:"hide-footer"})],l.prototype,"hideFooter",2),c([m({type:Boolean,attribute:"hide-outside"})],l.prototype,"hideOutside",2),c([m({type:String,attribute:"first-day-of-week"})],l.prototype,"firstDayOfWeek",2),c([m({type:String,attribute:"disable-weekdays"})],l.prototype,"disableWeekdays",2),c([m({type:String,attribute:"disable-dates"})],l.prototype,"disableDates",2),c([w()],l.prototype,"currentMonth",2),c([w()],l.prototype,"currentYear",2),c([w()],l.prototype,"selectedDate",2),c([w()],l.prototype,"calendarData",2),c([w()],l.prototype,"focusedCell",2),c([w()],l.prototype,"currentView",2),c([w()],l.prototype,"previousView",2),c([V("value")],l.prototype,"handleValueChange",1),c([V(["min","max","firstDayOfWeek","hideOutside"])],l.prototype,"handleOptionsChange",1),l=c([F("cps-calendar")],l);export{l as a};
