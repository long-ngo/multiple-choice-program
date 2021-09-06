import { Component, createRef } from 'react';
//import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Question.css';

class Question extends Component {
    constructor(props) {
        super(props);
        // this.data = [
        //     {
        //         name: 'Câu 1',
        //         title:
        //             'Trong các độ dài 50000mm, 50m, 5000cm, 50dm độ dài nhỏ nhất là:',
        //         choose: {
        //             A: '50m',
        //             B: '50000mm',
        //             C: '50dm',
        //             D: '5000cm'
        //         },
        //         correctAnswer: 'C'
        //     },
        //     {
        //         name: 'Câu 2',
        //         title:
        //             'Nếu ngày 30 tháng 4 là thứ sáu thì ngày 30 tháng 6 cùng năm đó là:',
        //         choose: {
        //             A: 'Thứ tư',
        //             B: 'Thứ bảy',
        //             C: 'Thứ sáu',
        //             D: 'Thứ năm'
        //         },
        //         correctAnswer: 'A'
        //     },
        //     {
        //         name: 'Câu 3',
        //         title:
        //             'Chị có 9600 đồng. Chị đã mua sách hết 2/4 số tiền đó. Vậy số tiền chị còn lại là:',
        //         choose: {
        //             A: '3200 đồng',
        //             B: '6400 đồng',
        //             C: '2300 đồng',
        //             D: '4800 đồng'
        //         },
        //         correctAnswer: 'D'
        //     },
        //     {
        //         name: 'Câu 4',
        //         title:
        //             'Ngày 26 tháng 1 là thứ năm. Ngày 2 tháng 3 cùng năm đó là? Biết rằng năm đó nhuận',
        //         choose: {
        //             A: 'Thứ năm',
        //             B: 'Thứ hai',
        //             C: 'Thứ sáu',
        //             D: 'Thứ tư'
        //         },
        //         correctAnswer: 'B'
        //     },
        //     {
        //         name: 'Câu 5',
        //         title:
        //             'Bà mua 3 kg gạo, giá 5 kg gạo là 14000 đồng. Bà đưa cô bán gạo 10000 đồng. Vậy cô bán hàng phải trả lại: ',
        //         choose: {
        //             A: '2200 đồng',
        //             B: '1600 đồng',
        //             C: '2800 đồng',
        //             D: '2700 đồng'
        //         },
        //         correctAnswer: 'B'
        //     },
        //     {
        //         name: 'Câu 6',
        //         title: 'Dãy số nào viết theo thứ tự từ lớn đến bé: ',
        //         choose: {
        //             A: '8271, 8270, 8289, 8265',
        //             B: '7633, 7629, 7640, 7630',
        //             C: '5208, 5272, 5369, 5414',
        //             D: '6925, 6924, 6923, 6922'
        //         },
        //         correctAnswer: 'D'
        //     },
        //     {
        //         name: 'Câu 7',
        //         title: 'Trong một năm số tháng dương lịch có 30 ngày là:',
        //         choose: {
        //             A: '3',
        //             B: '4',
        //             C: '5',
        //             D: '7'
        //         },
        //         correctAnswer: 'B'
        //     },
        //     {
        //         name: 'Câu 8',
        //         title: 'Hãy tìm một số ? Biết rằng số đó bằng 1/3 số lớn nhất ?',
        //         choose: {
        //             A: '33 cm2',
        //             B: '44 cm2',
        //             C: '55 cm',
        //             D: 'Số đó không tồn tại'
        //         },
        //         correctAnswer: 'D'
        //     },
        //     {
        //         name: 'Câu 9',
        //         title: 'Hãy tìm một số ? Biết rằng số đó bằng 1/4 cạnh của hình vuông có diện tích 144 m2 ?',
        //         choose: {
        //             A: '3',
        //             B: '5',
        //             C: '7',
        //             D: '12'
        //         },
        //         correctAnswer: 'A'
        //     },
        //     {
        //         name: 'Câu 10',
        //         title:
        //             'Trong một chuồng nhốt chung gà và heo, người ta đếm được tất cả 100 cái chân. Tổng số gà và heo là 35 con. Hỏi có bao nhiêu con gà ? Bao nhiêu con heo ?',
        //         choose: {
        //             A: '10 heo 15 gà',
        //             B: '10 heo 25 gà',
        //             C: '15 heo 20 gà',
        //             D: '15 heo 10 gà'
        //         },
        //         correctAnswer: 'C'
        //     }
        // ];

        this.data = [
            {
                name: 'Câu 1',
                title: 'Mệnh đề nào được sử dụng để tìm kiếm giá trị theo mẫu nhất định?',
                choose: {
                    A: 'LIKE',
                    B: 'GET',
                    C: 'FROM',
                    D: 'WHERE'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 2',
                title: ' Câu lệnh SQL nào được sử dụng để tạo bảng trong cơ sở dữ liệu?',
                choose: {
                    A: 'CREATE DB',
                    B: 'CREATE TABLE',
                    C: 'CREATE DATABASE TAB',
                    D: 'CREATE DATABASE TABLE'
                },
                correctAnswer: 'B'
            },
            {
                name: 'Câu 3',
                title: 'Trong SQL, mệnh đề ALTER TABLE dùng để làm gì?',
                choose: {
                    A: 'Dùng để thêm, xoá và sửa đổi các cột trong một bảng đã có.',
                    B: 'Dùng để chèn dữ liệu vào bảng trong cơ sở dữ liệu.',
                    C: 'Dùng để xóa bảng trong cơ sở dữ liệu.',
                    D: 'Dùng để xóa dữ liệu khỏi bảng trong cơ sở dữ liệu.'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 4',
                title: 'Mệnh đề HAVING chỉ có thể được sử dụng với...',
                choose: {
                    A: 'Câu lệnh INSERT',
                    B: 'Câu lệnh JOIN',
                    C: 'Câu lệnh DELETE',
                    D: 'Câu lệnh SELECT'
                },
                correctAnswer: 'D'
            },
            {
                name: 'Câu 5',
                title: 'Khẳng định nào sau đây là đúng?',
                choose: {
                    A: 'TRUNCATE TABLE phải được sử dụng cùng với mệnh đề WHERE.',
                    B: 'TRUNCATE TABLE có chức năng tương tự như lệnh DELETE nhưng không có mệnh đề WHERE và đều được sử dụng để xóa các bản ghi từ một bảng đang tồn tại trong SQL.',
                    C: 'TRUNCATE TABLE xóa bảng khỏi cơ sở dữ liệu',
                    D: 'TRUNCATE TABLE thêm bảng vào cơ sở dữ liệu'
                },
                correctAnswer: 'B'
            },
            {
                name: 'Câu 6',
                title: 'Câu lệnh SQL nào sau đây là đúng?',
                choose: {
                    A: "SELECT * FROM Sales WHERE Date BETWEEN '10/12/2005' AND '01/01/2006'",
                    B: "SELECT FROM Sales WHERE Date BETWEEN '10/12/2005' AND '01/01/2006'",
                    C: "SELECT FROM Sales WHERE Date BETWEEN ('10/12/2005', '01/01/2006')",
                    D: "SELECT FROM Sales WHERE Date BETWEEN ('10/12/2005'; '01/01/2006')"
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 7',
                title: 'Câu lệnh CREATE TABLE dùng để làm gì?',
                choose: {
                    A: 'Tạo một bảng cơ sở dữ liệu mới',
                    B: 'Tạo một thủ tục lưu trữ',
                    C: 'Tạo chế độ xem cơ sở dữ liệu',
                    D: 'Tạo chế độ chỉnh sửa cơ sở dữ liệu'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 8',
                title: 'RDBMS là viết tắt của...?',
                choose: {
                    A: 'Real Database Management System',
                    B: 'Relational Database Management System',
                    C: 'Read Database Master System',
                    D: 'Không tồn tại'
                },
                correctAnswer: 'B'
            },
            {
                name: 'Câu 9',
                title: 'Hàm nào dưới đây là hàm tập hợp trong SQL?',
                choose: {
                    A: 'AVG',
                    B: 'LEN',
                    C: 'JOIN',
                    D: 'LEFT'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 10',
                title: "Lệnh SQL nào sau đây lấy ra chuỗi 'Success'?",
                choose: {
                    A: "SELECT ' Success '",
                    B: "SELECT 'Success'",
                    C: "SELECT LEFT('Success is all I need.', 15)",
                    D: "SELECT '&Success'"
                },
                correctAnswer: 'B'
            },
            {
                name: 'Câu 11',
                title: 'SELECT Khachhang, COUNT(Dondathang) FROM Sales GROUP BY Khachhang HAVING COUNT(Dondathang) >5. Câu lệnh SQL sau đây làm gì:',
                choose: {
                    A: 'Chọn tất cả khách hàng từ bảng Sales đã thực hiện hơn 5 đơn hàng.',
                    B: 'Chọn tất cả khách hàng từ bảng Sales.',
                    C: 'Chọn tổng số đơn đặt hàng từ bảng Sales, nếu số này lớn hơn 5',
                    D: 'Chọn tổng số đơn đặt hàng từ bảng Sales, nếu số này nhỏ hơn 5'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 12',
                title: 'Câu lệnh SQL nào sau đây sẽ chọn tất cả các bản ghi với tất cả các cột của chúng từ một bảng có tên là Sales',
                choose: {
                    A: 'DELETE FROM Sales',
                    B: 'SELECT * FROM SALES WHERE OrderID < 1',
                    C: 'SELECT * FROM Sales',
                    D: 'SELECT FROM Sales'
                },
                correctAnswer: 'C'
            },
            {
                name: 'Câu 13',
                title: 'Yếu tố nào đứng sau câu lệnh SELECT trong SQL?',
                choose: {
                    A: 'Tên bảng trong cơ sở dữ liệu sẽ lấy ra các bản ghi.',
                    B: 'Danh sách các cột được chọn hoặc ký hiệu *.',
                    C: 'Mệnh đề JOIN.',
                    D: 'Danh sách hàng.'
                },
                correctAnswer: 'B'
            },
            {
                name: 'Câu 14',
                title: 'Index trong SQL là gì?',
                choose: {
                    A: 'Là một thuộc tính bảng cơ sở dữ liệu, giúp tăng tốc tìm kiếm dữ liệu trong một bảng.',
                    B: 'Là một phương pháp để join 2 hay nhiều bảng với nhau.',
                    C: 'Chức năng tương tự như Alias',
                    D: 'Là một phương pháp để join 2 bảng lại với nhau '
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 15',
                title: 'Nếu không chỉ định ASC hoặc DESC sau mệnh đề ORDER BY thì từ khóa nào được sử dụng theo mặc định?',
                choose: {
                    A: 'ASC',
                    B: 'DESC',
                    C: 'DOWN',
                    D: 'Không có giá trị mặc định.'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 16',
                title: 'Có thể sử dụng cả mệnh đề SQL HAVING và WHERE trong cùng một câu lệnh SQL không?',
                choose: {
                    A: 'Có thể',
                    B: 'Không thể',
                    C: 'Có thể có, có thể không',
                    D: 'Tùy trường hợp'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 17',
                title: 'Đâu là khẳng định đúng khi nói về AS trong SQL?',
                choose: {
                    A: 'Mệnh đề AS chỉ được sử dụng với mệnh đề JOIN.',
                    B: 'Mệnh đề AS khai báo một điều kiện tìm kiếm.',
                    C: 'Mệnh đề AS được sử dụng để thay đổi tên một cột trong tập kết quả hoặc để gán tên cho một cột dẫn xuất.',
                    D: 'Mệnh đề AS khai báo một điều kiện tìm kiếm không cần điều kiện'
                },
                correctAnswer: 'C'
            },
            {
                name: 'Câu 18',
                title: 'Đâu không phải là một từ khóa hoặc mệnh đề trong SQL?',
                choose: {
                    A: 'INSERT',
                    B: 'SELECT',
                    C: 'INVERT',
                    D: 'UPDATE'
                },
                correctAnswer: 'C'
            },
            {
                name: 'Câu 19',
                title: 'Hàm ABS trong SQL được sử dụng để làm gì?',
                choose: {
                    A: 'Trả về giá trị tuyệt đối của biểu thức số.',
                    B: 'Trả về giá trị tối thiểu của biểu thức số.',
                    C: 'Trả về giá trị tối đa của một biểu thức số.',
                    D: 'Trả về giá trị trung bình của một biểu thức số.'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 20',
                title: 'LIKE được sử dụng cùng với lệnh nào?',
                choose: {
                    A: 'Mệnh đề WHERE',
                    B: 'Mệnh đề GROUP BY',
                    C: 'Mệnh đề JOIN',
                    D: 'Mệnh đề ORDER BY'
                },
                correctAnswer: 'A'
            }
        ];

        this.state = {
            scores: 0,
            wrongSentence: 0,
            disabled: false,
            show: false,
            time: this.data.length * 60 * 1000
        };

        this.formRef = createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleResult = this.handleResult.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            if (!this.state.disabled) {
                this.handleResult();
            }
        }, this.state.time);
    }

    handleSubmit(e) {
        //this.handleShow();
        e.preventDefault();

        const answer = this.data.map((dataItem) => {
            return e.target.elements[dataItem.name].value;
        });

        if (!answer.every((answerItem) => answerItem)) {
            window.alert('Chọn hết rồi hãy nộp!');
            return;
        }

        if (window.confirm('Bạn có chắc muốn nộp bài không?')) {
            const rightAnswer = this.data.filter((dataItem) => {
                return (
                    e.target.elements[dataItem.name].value ===
                    dataItem.correctAnswer
                );
            });

            this.setState({
                scores: ((10 / this.data.length) * rightAnswer.length).toFixed(
                    1
                ),
                wrongSentence: this.data.length - rightAnswer.length,
                disabled: true
            });
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleResult() {
        this.handleClose();

        const formTarget = this.formRef.current.elements;
        const answer = this.data.filter((dataItem) => {
            return formTarget[dataItem.name].value === dataItem.correctAnswer;
        });

        this.setState({
            scores: ((10 / this.data.length) * answer.length).toFixed(1),
            wrongSentence: this.data.length - answer.length,
            disabled: true
        });
    }

    render() {
        return (
            <div className="question">
                <div className="container">
                    <h2 className="question__heading">
                        Trắc nghiệm lập trình cơ sở dữ liệu
                    </h2>
                    {/* <h5 className="alert-danger p-3">
                        Làm không được 10 điểm khỏi chơi điện thoại con nhé :))
                    </h5> */}
                    <form
                        className="question__list"
                        onSubmit={this.handleSubmit}
                        ref={this.formRef}
                    >
                        {this.data.map((question, key) => {
                            return (
                                <div className="question__list-item" key={key}>
                                    <div className="question__list-item-title">
                                        Câu {key + 1} {question.title}
                                    </div>

                                    <div className="question__list-item-choose">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            value="A"
                                        ></input>
                                        <span className="question__list-item-choose-question">
                                            A. {question.choose.A}
                                        </span>
                                    </div>

                                    <div className="question__list-item-choose">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            value="B"
                                        ></input>
                                        <span className="question__list-item-choose-question">
                                            B. {question.choose.B}
                                        </span>
                                    </div>

                                    <div className="question__list-item-choose">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            value="C"
                                        ></input>
                                        <span className="question__list-item-choose-question">
                                            C. {question.choose.C}
                                        </span>
                                    </div>

                                    <div className="question__list-item-choose">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            value="D"
                                        ></input>
                                        <span className="question__list-item-choose-question">
                                            D. {question.choose.D}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="question__show">
                            <button
                                className="btn btn-primary question__show-submit"
                                type="submit"
                                disabled={this.state.disabled}
                            >
                                Nộp bài
                            </button>
                            <div className="question__show-result">
                                <p className="alert-info p-2">
                                    Số câu sai: {this.state.wrongSentence}
                                </p>
                                <p className="alert-info p-2">
                                    Điểm: {this.state.scores}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

                {/* <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nộp bài</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Con có chắc muốn nộp bài không?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Để con nghĩ lại
                        </Button>
                        <Button variant="primary" onClick={this.handleResult}>
                            Vâng
                        </Button>
                    </Modal.Footer>
                </Modal> */}
            </div>
        );
    }
}

export default Question;
