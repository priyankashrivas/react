import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App=() => {
    return (
    <div className="ui comment container">
        <ApprovalCard>
            <CommentDetail 
                author="sam" 
                timeago="today at 4:45PM" 
                comment="nice pic"
                avatar={faker.image.avatar()}
             />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                author="rainy" 
                timeago="today at 6:00PM" 
                comment="hello nice to see you"
                avatar={faker.image.avatar()}
            /> 
        </ApprovalCard>

        <ApprovalCard>   
            <CommentDetail 
                author="bob" 
                timeago="today at 11:45AM" 
                comment="hey.....! whatsupp"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>    
            <CommentDetail 
                author="tom" 
                timeago="today at 3:00PM" 
                comment="beautiful....."
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>    
        
    </div>

    );
};
ReactDOM.render(<App/>,document.querySelector('#root'));