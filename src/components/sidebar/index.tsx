import React from "react";
import "./sidebar.css";
import {connect, RootStateOrAny} from "react-redux";

const Sidebar = (
    {isOpen, children}: { isOpen: boolean, children: React.ReactNode }
) => {
    const classNames = [isOpen ? "sidebar sidebar--open" : "sidebar", "sidebar--left"].join(" ");

    return (
        <>
            <div className={isOpen ? "overlay overlay--open" : "overlay"}/>
            <div className={classNames}>
                <div className='sidebar__menu'>
                    {children}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state: RootStateOrAny) => ({
    isOpen: state.sidebar.isOpen
});

export default connect(mapStateToProps)(Sidebar);
