import styled from "styled-components";

function MyPageFooter() {
    const FlexComponent = styled.p`
        display: flex;
        flex-direction: row;
        gap: 20px;
        //center text in footer
        justify-content: center;
        margin-top: 1rem;
        color: #cccccc;
    `;

    return (
        // jsx <> </>
        <>
            <footer className="fixed-bottom Footer">
                <FlexComponent>
                    {/*copy right img*/}
                    Portfolio <span>&#169;</span>
                    2023
                </FlexComponent>
            </footer>
        </>
    );
}

export default MyPageFooter;
