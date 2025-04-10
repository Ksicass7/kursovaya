import '../Form/Form.module.scss'

export function ModalMessage({isOpen, onClose}){
    if(!isOpen) return null
    return(
        <div  className="ModalMessage" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <svg width="235" height="235" viewBox="0 0 235 235" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="117.177" cy="117.177" r="94.9058" transform="rotate(11.032 117.177 117.177)" stroke="#75BEAC" strokeOpacity="0.75" strokeWidth="10"/>
<rect x="185.652" y="37.8706" width="25.2729" height="25.5896" transform="rotate(41.0279 185.652 37.8706)" fill="white"/>
<path d="M203.085 34.9023L111.361 153.097" stroke="#98CFC1" strokeWidth="9"/>
<line x1="117.496" y1="152.57" x2="65.451" y2="112.629" stroke="#98CFC1" strokeWidth="9"/>
</svg>

    <p className='modal__text'>Ваше сообщение успешно отправлено!</p>
            </div>
        </div>
    )
    
}