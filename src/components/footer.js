import style from "styled-components";

function MyPageFooter() {

    const FlexComponent = style.p`
    display: flex;
    flex-direction: row;
    gap: 20px;
    `;


    return (// jsx <> </>
        <>
            {/*section better for accessibility, when you browse with human assistant programs*/}
            <section className="fixed-bottom bg-danger">
                <div className="MyFooter">
                    <div className="container">
                        <FlexComponent>
                            {/*copy right img*/}
                            <p className="text-success">Chantal's Portfolio <span>&#169;</span></p>
                            <br/>
                            <p className="text-muted">2022</p>
                        </FlexComponent>
                    </div>
                </div>
            </section>
        </>)
}


export default MyPageFooter;