import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/list-data/action';

import Moment from 'moment';

import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Header from '../../components/DataTable/Header';

Moment.locale('ID');
const LisData = ()=> {
    const dispatch = useDispatch();
    const {data, info} = useSelector(state => state.ListDataReducer);
    const [orderBy, setOrderBy] = useState('login.username');
    const [order, setOrder] = useState('desc');
    const [selected, setSelected] = useState([]);
    const [dense, setDense] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [keyword, setKeyword] = useState(null)
    const [gender, setGender] = useState(null);
    const [reset, setReset] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [limit, setLimit] = useState(10);


    function searchFunction(){
        dispatch(getData(page, limit, keyword));
    }

    function emptyFilter(){
        setKeyword('')
        setGender('')
        setRefresh(true)
        // dispatch(getData(page, limit, keyword));
    }
    function esds(){
        dispatch(getData(page, rowsPerPage, keyword, gender));
    }
    useEffect(() => {
        esds()
    }, [dispatch, page, rowsPerPage]);
    
    useEffect(() => {
        if (gender){
            esds()
        }
    }, [dispatch,gender, page]);

    useEffect(() => {
        if (refresh){
            setPage(0)
            setRowsPerPage(5)
            dispatch(getData(0, 5));
        }
    }, [dispatch, refresh]);

    //MATERIAL
    const headCells = [
        {
          id: 'login.username',
          numeric: false,
          disablePadding: true,
          label: 'Username',
        },
        {
          id: 'name.first',
          numeric: true,
          disablePadding: false,
          label: 'Name',
        },
        {
          id: 'email',
          numeric: true,
          disablePadding: false,
          label: 'Email',
        },
        {
          id: 'gender',
          numeric: true,
          disablePadding: false,
          label: 'Gender',
        },
        {
          id: 'registered',
          numeric: true,
          disablePadding: false,
          label: 'Registered Date',
        },
    ];

    function EnhancedTableHead(props) {
        const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
          props;
        const createSortHandler = (property) => (event) => {
          onRequestSort(event, property);
        };
      
        return (
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                    <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={createSortHandler(headCell.id)}
                    >
                        {headCell.label}
                    </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        );
    }
    
    const handleRequestSort = (event, property) => {
        console.log(property+ ' properti')
        console.log(order+ ' order')
        
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };  
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) =>
            [el, index]
        );
        stabilizedThis.sort((a, b) => {
            // console.log(a)
          const order = comparator(a[0], b[0]);
          if (order !== 0) {
            return order;
          }
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }
    function getComparator(order, orderBy) {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b, orderBy)
          : (a, b) => -descendingComparator(a, b, orderBy);
    }
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;
    
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    
        setSelected(newSelected);
      };
      const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        console.log(JSON.stringify(event.target.value)+'event')

        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
    //MATERIAL
      console.log(data)
    return (
        <div className="px-48">
        
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 40 }}>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                        style={{margin: 10}}
                    >
                        List Data
                    </Typography>
                <TableContainer>
                <Header
                    keyword={keyword}
                    setKeyword={setKeyword}
                    searchFunction={searchFunction}
                    gender={gender}
                    setGender={setGender}
                    setReset ={setReset}
                    emptyFilter={emptyFilter}
                />
                    <Table
                        sx={{ minWidth: 750, }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        style={{margin: 10}}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={data.length}
                        />
                        <TableBody>
                        {stableSort(data, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.login.username}
                                        </TableCell>
                                        <TableCell align="right">{row.name.first} {row.name.last}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.gender}</TableCell>
                                        <TableCell align="right">{Moment(row.registered.date).format('DD-mm-yyyy HH:mm')}</TableCell>
                                    </TableRow>
                                );
                            })
                        }
                        {emptyRows > 0 && (
                            <TableRow
                            style={{
                                height: (dense ? 33 : 53) * emptyRows,
                            }}
                            >
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>

                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
           
        </Box> 
        </div>
        
    
    );
}

export default LisData;