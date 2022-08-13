function flattenPoints(points: Point[], close: boolean) {
  let new_points = points.map(({ x, y }) => [x, y]);

  if (close) {
    const lastPoint = new_points[new_points.length - 1];
    const secondToLastPoint = new_points[new_points.length - 2];

    const firstPoint = new_points[0];
    const secondPoint = new_points[1];

    new_points.unshift(lastPoint);
    new_points.unshift(secondToLastPoint);

    new_points.push(firstPoint);
    new_points.push(secondPoint);
  }

  return new_points.flat();
}

interface Point {
  x: number;
  y: number;
}

function spline(
  points: Point[] = [],
  tension: number = 1,
  close: boolean = false,
  cb: (arg0: string, arg1: any[]) => any
) {
  let flattened = flattenPoints(points, close);

  const size = flattened.length;
  const last = size - 4;

  const initialX = close ? flattened[2] : flattened[0];
  const initialY = close ? flattened[3] : flattened[1];

  let path: String = 'M' + [initialX, initialY];

  cb && cb('MOVE', [initialX, initialY]);

  const startIteration = close ? 2 : 0;
  const maxIteration = close ? size - 4 : size - 2;
  const inc = 2;

  for (let i = startIteration; i < maxIteration; i += inc) {
    const x0 = i ? flattened[i - 2] : flattened[0];
    const y0 = i ? flattened[i - 1] : flattened[1];

    const x1 = flattened[i + 0];
    const y1 = flattened[i + 1];

    const x2 = flattened[i + 2];
    const y2 = flattened[i + 3];

    const x3 = i !== last ? flattened[i + 4] : x2;
    const y3 = i !== last ? flattened[i + 5] : y2;

    const cp1x = x1 + ((x2 - x0) / 6) * tension;
    const cp1y = y1 + ((y2 - y0) / 6) * tension;

    const cp2x = x2 - ((x3 - x1) / 6) * tension;
    const cp2y = y2 - ((y3 - y1) / 6) * tension;

    path += 'C' + [cp1x, cp1y, cp2x, cp2y, x2, y2];

    cb && cb('CURVE', [cp1x, cp1y, cp2x, cp2y, x2, y2]);
  }

  return path;
}

export { spline };
