<h1>react group 2 members</h1>
const member=["Nathan","Natinael","Osman","Rahel","Robel","Ruth T","Ruth z","Salahuddin","salem","samuel","solomon","Surafel","Temesgen","Meron"];
function GroupMembersList(){
    
    return (
   
    <div className="Greeting" class="new" >
        
        {member.map((member)=>{
            return<h2>{member}</h2>})  }
        
    </div>);
}


export default GroupMembersList;