import React, { useCallback } from 'react';
import useEvent from 'react-use/lib/useEvent'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { Image } from 'react-bootstrap';
import 'react-medium-image-zoom/dist/styles.css'

const MappedComponent = props => {
    const transition = props.isActive ? 0 : 300;
    const imgSize = 500;

    const handleKeyDown = useCallback(e => {
        if (props.activeIndex === null)
            return
        if (e.key === 'ArrowLeft' || e.keyCode === 37)
            props.activeIndexHandler(Math.max(props.activeIndex - 1, 0))
        else if (e.key === 'ArrowRight' || e.keyCode === 39)
            props.activeIndexHandler(Math.min(props.activeIndex + 1, props.length - 1))
    }, [props])
    const ZoomChangeHandler = useCallback( isZoomed => {
        if (isZoomed) {
            props.activeIndexHandler(props.index)
            return
        }
        props.activeIndexHandler(null)
    }, [props]);

    useEvent('keydown', handleKeyDown, document)

    return (
        <ControlledZoom
            isZoomed={props.activeIndex === props.index}
            onZoomChange={ZoomChangeHandler}
            transitionDuration={transition}
            wrapStyle={{ width: '100%' }}
        >
            <Image key={props.index} src={props.img} alt="" width={imgSize} height={imgSize} className="img-thumbnail" rounded/>
        </ControlledZoom>
    );
}


class ListImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeIndex: null,
          isActive: false,
        };
    }
    setActiveIndex = (index) => {
        if (index === null && this.state.isActive === true)
            this.setState({isActive: false})
        else if (this.state.activeIndex && index != null)
            this.setState({isActive: true})
        this.setState({activeIndex: index})
    }

    render() {
        return (
            <div>
            <h2 style={{textAlign: 'left'}}>
                {this.props.title}
            </h2>
            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}
            >
                {this.props.images.map((img, i) => {
                    return (
                        <li
                        key={`${i}-${img.src}`}
                        style={{ margin: '0 1rem 1rem 0', width: 'calc(33% - 1rem)' }}
                        >
                            <MappedComponent
                            key={i}
                            img={img}
                            index={i}
                            activeIndex={this.state.activeIndex}
                            length={this.props.images.length}
                            activeIndexHandler={this.setActiveIndex}
                            isActive={this.state.isActive}
                            />
                        </li>
                    )
                })}
            </ul>
            </div>
        );
    }
}
export default ListImages;
