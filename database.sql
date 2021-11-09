CREATE TABLE ServerIDs(
    id          INT unsigned NOT NULL AUTO_INCREMENT,
    server_id   INT unsigned NOT NULL UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE MessageIDs(
    id          INT unsigned NOT NULL AUTO_INCREMENT,
    message_id  INT unsigned NOT NULL,
    server_id   INT unsigned NOT NULL,
    UNIQUE(message_id, server_id),
    PRIMARY KEY(id),
    FOREIGN KEY(server_id) REFERENCES ServerIDs(server_id)
);