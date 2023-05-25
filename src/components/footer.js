import style from "styled-components";

function MyPageFooter() {
    const FlexComponent = style.p`
    display: flex;
    flex-direction: row;
    gap: 20px;
    //center text in footer
    justify-content: center;
    margin-top: 1rem;
    `;

    return (
        // jsx <> </>
        <>
            <footer className="fixed-bottom Footer">
                <FlexComponent>
                    {/*copy right img*/}
                    <p className="text-muted">
                        Portfolio <span>&#169;</span>
                    </p>
                    <br />
                    <p className="text-muted">2023</p>
                </FlexComponent>
            </footer>
        </>
    );
}

export default MyPageFooter;
