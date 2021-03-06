import React from 'react';
import './main.css';
import ReactTypingEffect from 'react-typing-effect';

function HeroText() {
    const TypingStyle = {
        fontWeight: "bold",
        letterSpacing: "0.3rem"
    }
    return (
        <div>
            <div className="Hero-text">
                <div className="Big-text"> 
                    More Of <br />
                    an agency
                </div>
                <div className="Typing-text"> 
                    <div>
                        We are software company and we are providing 
                        <div>
                            <ReactTypingEffect
                                text={[" Web Development.", " Web Designing."]}
                                cursorRenderer={cursor => <h3>{cursor}</h3>}
                                typingDelay= "300"
                                eraseDelay= "3000"
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <div>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                <span
                                                    key={key}
                                                    style={TypingStyle}
                                                >{char}</span>
                                                );
                                            })}
                                        </div>
                                    );
                                }}        
                            />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default HeroText;
