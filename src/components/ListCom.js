import { useState, useEffect } from 'react';

function ListCom({ data, loading, error, selectedMember, onSelect, onDelete, onEdit, currentUser, setSelectedMember }) {
    const isOwner = currentUser && selectedMember && currentUser.id === selectedMember.id;
    const [editMode, setEditMode] = useState(false);
    const [editedMember, setEditedMember] = useState({});

    useEffect(() => {
        if (selectedMember) {
            setEditedMember({ ...selectedMember });
        }
    }, [selectedMember]); 

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedMember(prev => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = () => {
        onEdit(editedMember); 
        setEditMode(false);
        setSelectedMember(null);
    };

    return (<>
        {loading ? <h3>Loading . . . </h3> :error ? <h3>{error}</h3> :selectedMember ? (
                    <div>
                        <h3>회원 상세 정보</h3>
                        {editMode ? (
                            <div>
                                <input type="text" name="name" value={editedMember.name}
                                       onChange={handleEditChange}
                                /><br/>
                                <input
                                    type="text" name="addr" value={editedMember.addr}
                                    onChange={handleEditChange}
                                /><br/>
                                <button onClick={handleEditSubmit}>수정 완료</button> &nbsp;
                                <button onClick={() => setEditMode(false)}>취소</button>
                            </div>
                        ) : (
                            <>
                                <p>ID: {selectedMember.id}</p>
                                <p>이름: {selectedMember.name}</p>
                                <p>주소: {selectedMember.addr}</p>
                                {isOwner && (
                                    <>
                                        <button onClick={() => onDelete(selectedMember.id)}>삭제</button>
                                        <button onClick={() => setEditMode(true)}>수정</button>
                                    </>)}
                            </> )}
                    </div>
                ) : (
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>이름</th>
                                <th>주소</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map(d => (
                                <tr key={d.id}>
                                    <td onClick={() => onSelect(d.id)} style={{ cursor: 'pointer' }}>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.addr}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
        }
    </>);
}

export default ListCom;