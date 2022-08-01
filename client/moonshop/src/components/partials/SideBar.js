import React from 'react';

const SideBar = () => {
    return(
        <div className='shop-sidebar-wrapper col-lg-3 col-md-3 col-sm-12'>
            <div className='shop-search'>
                <form>
                    <input type="text" className="form-control" placeholder="Tìm kiếm..."/>
                    <button>
                        <img src='https://andshop-react.netlify.app/static/media/search.4672f25b.svg' alt='icon search'/>
                    </button>
                </form>
            </div>
            <div className='shop-sidebar-boxed'>
                <h4>Dòng máy tính</h4>
                <form>
                <label className="checkcontainer">Laptop văn phòng
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Laptop gaming
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Máy tính bảng
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Máy tính bàn
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Laptop cao cấp
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                </form>
            </div>
            <div className='shop-sidebar-boxed'>
                <h4>Thương hiệu</h4>
                <form>
                    <label className="checkcontainer">MacBook
                        <input type="radio" name="radio"/>
                        <span className="radiobtn"></span>
                    </label>
                    <label className="checkcontainer">ASUS
                        <input type="radio" name="radio"/>
                        <span className="radiobtn"></span>
                    </label>
                    <label className="checkcontainer">HP
                        <input type="radio" name="radio"/>
                        <span className="radiobtn"></span>
                    </label>
                    <label className="checkcontainer">Dell
                        <input type="radio" name="radio"/>
                        <span className="radiobtn"></span>
                    </label>
                    <label className="checkcontainer">MSI
                        <input type="radio" name="radio"/>
                        <span className="radiobtn"></span>
                    </label>
                    <label className="checkcontainer">Lenovo
                        <input type="radio" name="radio"/>
                        <span className="radiobtn"></span>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default React.memo(SideBar);