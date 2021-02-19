const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const members = require('../../Members');
//routes/api

//get members
router.get('/', (request, response) => {
    response.json(members);
});

router.get('/:id', (request, response) => {
    const found = members.some(member => member.id === parseInt(request.params.id));
    if(found)
    {
        response.json(members.filter(member => member.id == request.params.id))
    }
    else
    {
        response.status(400).json({msg: `No member with the id of ${request.params.id}`})
    }
})


//create member
router.post('/', (request, response) => {
    const newMember = {
        id : uuid.v4(),
        name: request.body.name,
        email: request.body.email,
        status: 'active'
    };

    if(!newMember.name || !newMember.email){
        return response.status(400).json({msg: 'Name email required'});
    }

    members.push(newMember);
    response.json(members);
});

//update member
router.put('/:id', (request, response) => {
    const found = members.some(member => member.id === parseInt(request.params.id));
    if(found)
    {
       //update code here
    }
    else
    {
        response.status(400).json({msg: `No member with the id of ${request.params.id}`})
    }
})


//delete member
router.delete('/:id', (request, response) => {
    const found = members.some(member => member.id === parseInt(request.params.id));
    if(found)
    {
       //delete code here
    }
    else
    {
        response.status(400).json({msg: `No member with the id of ${request.params.id}`})
    }
})
module.exports = router;