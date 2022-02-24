import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, ImageList, ImageListItem, TextField } from '@mui/material';
import { TableHeader, Pagination, Search } from './../../components/DataTable';
import { getData } from '../../store/list-data/action';

const LisData = ()=> {
    const dispatch = useDispatch();
    const [halaman, setHalaman] = useState(0);
    const [limit, setLimit] = useState(25);

    const {data} = useSelector(({state}) => state.ListDataReducer);
    

    useEffect(() => {
        dispatch(getData(halaman, limit));
    }, [dispatch, halaman, limit]);
    
    const headers = [
        { name: "No#", field: "id", sortable: false },
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Comment", field: "body", sortable: false }
    ];
    console.log(process.env.REACT_APP_REST_API)
    
    return (
        <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        {/* <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div> */}
                    </div>

                    <table className="table table-striped">
                        <TableHeader
                            headers={headers}
                            // onSorting={(field, order) =>
                            //     setSorting({ field, order })
                            // }
                        />
                        <tbody>
                                <tr>
                                    <th scope="row" >
                                        ssss
                                    </th>
                                    <td>s</td>
                                    <td>s</td>
                                    <td>s</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
         
    );
}

export default LisData;