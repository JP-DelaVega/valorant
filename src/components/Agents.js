import React from 'react'
export default function Agents() {
    const [info, setInfo] = React.useState({
        agentName: "",
        background: "",
        description: '',
        image: "",
        image2:"",
        role: "",
        roleIcon: "",
        abilities: ""
    })
    const [allData, setAllData] = React.useState([])
    const [showAbility, setShowAbility] = React.useState(0)
    const [isTrue, SetIsTrue] = React.useState(true)
    React.useEffect(() => {
        fetch("https://valorant-api.com/v1/agents")
            .then(res => res.json())
            .then(data => setAllData(data.data))
    }, [])
    const myAgents = allData.filter((val)=>{
        if(val.isPlayableCharacter === true){
            return val
        }
        return ""
    }).map((item) => (
        <img src={item.displayIconSmall}alt="agent" onClick={() =>
            setInfo({
                agentName: item.displayName,
                background: item.background,
                description: item.description,
                image: item.fullPortraitV2,
                image2: item.bustPortrait,
                role: item.role.displayName,
                roleIcon: item.role.displayIcon,
                abilities: item.abilities
            })} className="smallIcon"></img>
    ))
    function showAbilityInfo() {
        setShowAbility(0)
    }
    function showAbilityInfo1() {
        setShowAbility(1)
    }
    function showAbilityInfo2() {
        setShowAbility(2)
    }
    function showAbilityInfo3() {
        setShowAbility(3)
    }
    return (
        <div className='agents-main'>
            {info.image===""?"":
            <div className='agentInfo' style={{ backgroundImage: `url(${info.background}` }}>
            <div>
                <img src={info.image}onMouseOver={e => (e.currentTarget.src = info.image2)} 
                onMouseOut={e => (e.currentTarget.src = info.image)}
                alt="agent" className={isTrue?"agentImage animation":"agentImage animation2"}/>
            </div>
            <div className='right-info'>
                <h1 className='agentName'>{info.agentName}</h1>
                <div className='flex-row'>
                    <h2 className='role'>{info.role}</h2>
                    <img src={info.roleIcon} alt="role" className='roleIcon' />
                </div>
                <p className='agent-background'>{info.description}</p>
                {info.abilities ? <>
                    <div className='abilitiesIcon'>
                        <img  src={info.abilities[0].displayIcon} alt="ability1" className='ability' onClick={showAbilityInfo} />
                        <img src={info.abilities[1].displayIcon} alt="ability2" className='ability' onClick={showAbilityInfo1} />
                        <img src={info.abilities[2].displayIcon} alt="ability3" className='ability' onClick={showAbilityInfo2} />
                        <img src={info.abilities[3].displayIcon} alt="ability4" className='ability' onClick={showAbilityInfo3} />
                    </div><div className='abilityInfo'>
                        <h3 className='abilityName'>{info.abilities[showAbility].displayName} </h3>
                        <div>{info.abilities[showAbility].description} </div>
                    </div>
                    </> : ""}
            </div>
        </div>}
            <div className='agents'>
                <div onClick={()=>SetIsTrue(prevState => !prevState)}>{myAgents}</div>
            </div>
        </div>

    )
}
