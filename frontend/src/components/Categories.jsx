import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useContext } from 'react'
import { categories } from '../../public/category'
import { Link } from 'react-router-dom'
import PostContext from '../utility/PostContext'

function Categories() {
    const { setCategory } = useContext(PostContext)
    return (
        <div>
            <Link to='/create/post' className='flex justify-center'>
                {/* <Button variant='contained'>Create Blog</Button> */}
                <button className='my-4 mx-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition-colors duration-300'> CREATE BLOG </button>
            </Link>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link onClick={() => setCategory('all')}>
                                <Button fullWidth>
                                    <div className='text-center font-roboto font-helvetica font-arial font-sans font-medium text-lg text-black'>
                                        All Categories
                                    </div>
                                </Button>
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <Link onClick={() => setCategory(category.type.toLowerCase())}>
                                        <Button fullWidth>
                                            {category.type}
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </div>
    )
}

export default Categories